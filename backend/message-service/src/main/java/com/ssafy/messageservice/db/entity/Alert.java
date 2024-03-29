package com.ssafy.messageservice.db.entity;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateTimeDeserializer;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.domain.Auditable;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@Entity
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name="Alert")
public class Alert {
    @Id
    @Column(length = 100)
    private String id;

    @Column(length = 50)
    private String tripId;

    @Column(length = 200)
    private String tripName;

    @Column(length = 50)
    private String senderId;

    @Column(length = 50)
    private String receiverId;

    @Column
    private List<String> position;

    @Column
    private String aspiration;

    @Column(length = 50)
    private String alertType;

    @Column
    private boolean isRead;

    public enum AlertType{
        REQUEST, ACCEPT, REFUSE
    }
}