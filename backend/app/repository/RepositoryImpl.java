package repository;

import com.google.inject.TypeLiteral;
import com.mongodb.util.JSON;
import domain.Entity;
import org.bson.types.ObjectId;
import org.jongo.MongoCollection;
import org.jongo.MongoCursor;
import uk.co.panaxiom.playjongo.PlayJongo;

import javax.inject.Inject;
import java.util.ArrayList;
import java.util.List;

public class RepositoryImpl<T extends Entity> implements Repository<T> {

    @Inject
    public PlayJongo jongo;
    private Class<T> type;

    @Inject
    RepositoryImpl(TypeLiteral<T> type) {
        System.out.println(type.getRawType().getName());
        this.type = (Class<T>) type.getRawType();
    }


    public MongoCollection mongo() {
        return jongo.getCollection(this.type.getName());
    }

    @Override
    public void insert(T t) {
        ObjectId id = new ObjectId();
        t._id = id.toString();
        mongo().insert(t);
    }

    @Override
    public List<T> list() {
        MongoCursor<T> collection =  mongo().find().as(this.type);
        List<T> list = new ArrayList();
        collection.forEach(t -> list.add(t));
        return list;
    }

    @Override
    public void update(T t) {
        T findT = mongo().findOne("{_id: # }", t._id).as(type);
        findT = t;
        mongo().save(findT);
    }

    @Override
    public void delete(String id) {
        mongo().remove("{_id: #}", id);
    }
}