package com.GCS.TicketBooking.group.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name = "USER")
public class User {
    @Id
    @GeneratedValue
    private int id;
    private String userName;
    private String password;
    @Column(name = "active",columnDefinition = "TINYINT default 1")
    private boolean active;
    private String roles;//ROLE_USER,ROLE_ADMIN
}
