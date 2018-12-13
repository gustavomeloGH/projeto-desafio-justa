package controllers;
import play.mvc.*;

public class ApplicationController extends Controller {

    public Result index() { return  ok("App Works!"); }

}