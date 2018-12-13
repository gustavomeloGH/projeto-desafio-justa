package domain;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;

public abstract class Entity {

    @JsonSerialize(using = ToStringSerializer.class)
    @JsonProperty("_id")
    public String _id;

    Entity() { }

    public String getId() {
        return _id;
    }
    public void setId(String id) {
        this._id = _id;
    }

}
