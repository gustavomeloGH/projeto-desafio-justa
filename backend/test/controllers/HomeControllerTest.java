package controllers;

import play.Application;
import play.inject.guice.GuiceApplicationBuilder;
import play.test.WithApplication;

public class HomeControllerTest extends WithApplication {

    @Override
    protected Application provideApplication() {
        return new GuiceApplicationBuilder().build();
    }


}
