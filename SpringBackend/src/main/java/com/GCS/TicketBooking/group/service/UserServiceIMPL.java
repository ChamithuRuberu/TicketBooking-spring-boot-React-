package com.GCS.TicketBooking.group.service;

import com.GCS.TicketBooking.group.dto.UpdateUserRequestDTO;
import com.GCS.TicketBooking.group.entity.User;
import com.GCS.TicketBooking.group.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceIMPL implements UserService {

    @Autowired
    private UserRepository userRepo;


    @Override
    public String updateUser(UpdateUserRequestDTO updateUserRequestDTO) {
        if (userRepo.existsById(updateUserRequestDTO.getId())) {
            User user1=userRepo.getOne(updateUserRequestDTO.getId());
            updateUserRequestDTO.setPassword(updateUserRequestDTO.getPassword());

            return userRepo.save(user1).getUserName();
        }
        return "Not in DATABASE";
    }
}
