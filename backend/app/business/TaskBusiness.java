package business;

import domain.Task;
import exceptions.ErrorMessageException;
import org.bson.types.ObjectId;
import play.libs.Json;
import play.mvc.Controller;
import play.mvc.Result;
import repository.RepositoryImpl;

import javax.inject.Inject;
import java.util.List;

public class TaskBusiness {

    @Inject
    private RepositoryImpl<Task> taskRepository;

    public void insert(Task task) {
        taskRepository.insert(task);
    }
    
    public List<Task> list() {
        return taskRepository.list();
    }

    public void update(Task task) {
        taskRepository.update(task);
    }

    public void delete(String id) {
        taskRepository.delete(id);
    }

}
