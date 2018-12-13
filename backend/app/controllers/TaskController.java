package controllers;

import business.TaskBusiness;
import domain.Task;
import exceptions.ErrorMessageException;
import org.bson.types.ObjectId;
import play.libs.Json;
import play.mvc.*;

import javax.inject.Inject;

public class TaskController extends Controller {

    @Inject
    private TaskBusiness taskBusiness;

    public Result insert() {
        try {
            Task task = Json.fromJson(request().body().asJson(), Task.class);
            taskBusiness.insert(task);
            return ok();
        } catch (Exception ex){
            return status(400, Json.toJson(new ErrorMessageException(ex.getMessage())));
        }
    }
    
    public Result list() {
        try {
            return ok(Json.toJson(taskBusiness.list()));
        } catch (Exception ex){
            return status(400, Json.toJson(new ErrorMessageException(ex.getMessage())));
        }
    }

    public Result update() {
        try {
            Task task = Json.fromJson(request().body().asJson(), Task.class);
            taskBusiness.update(task);
            return ok();
        }
        catch (Exception ex){
            return status(400, Json.toJson(new ErrorMessageException(ex.getMessage())));
        }
    }

    public Result delete(String id) {
        try {
            taskBusiness.delete(id);
            return ok();
        }
        catch (Exception ex){
            return status(400, Json.toJson(new ErrorMessageException(ex.getMessage())));
        }
    }

}
