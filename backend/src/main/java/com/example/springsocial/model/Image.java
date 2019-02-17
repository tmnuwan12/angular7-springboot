package com.example.springsocial.model;

import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.util.UUID;

/**
 * @author Thusitha Nuwan
 */
@Entity
@Table(name = "image")
public class Image {


    @Id
    @GeneratedValue(generator = "uuid")
    @Type(type="uuid-char")
    @Column(length=36)
    private UUID id;

    @Lob
    @Column(name = "img")
    private byte[] img;

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public byte[] getImg() {
        return img;
    }

    public void setImg(byte[] img) {
        this.img = img;
    }
}
