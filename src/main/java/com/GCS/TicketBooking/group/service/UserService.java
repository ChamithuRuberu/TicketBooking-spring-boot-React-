package com.GCS.TicketBooking.group.service;

import com.GCS.TicketBooking.group.dto.UpdateUserRequestDTO;
import com.GCS.TicketBooking.group.entity.User;

public interface UserService {


    String updateUser(UpdateUserRequestDTO updateUserRequestDTO);
}
