package repository;

import domain.Entity;
import org.bson.types.ObjectId;
import java.util.List;

public interface Repository<T extends Entity> {

    void insert(T object);
    List<T> list();
    void update(T t);
    void delete(String id);

}
