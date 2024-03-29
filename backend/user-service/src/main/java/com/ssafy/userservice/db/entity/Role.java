package com.ssafy.userservice.db.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Getter
@RequiredArgsConstructor
public enum Role {

    USER("ROLE_USER"), ADMIN("ROLE_ADMIN");

    private final String key;
}

