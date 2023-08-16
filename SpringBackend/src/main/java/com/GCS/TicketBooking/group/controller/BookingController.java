package com.GCS.TicketBooking.group.controller;

import com.GCS.TicketBooking.group.dto.RequestBookingSaveDTO;
import com.GCS.TicketBooking.group.dto.paginated.paginatedResponseBookingDTO;
import com.GCS.TicketBooking.group.service.BookingService;
import com.GCS.TicketBooking.group.util.StanderResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("api/v1/booking2")
public class BookingController {


    @Autowired
    private BookingService bookingService;

    @PostMapping("/saveBooking")
    public ResponseEntity<StanderResponse> saveBooking(@RequestBody RequestBookingSaveDTO requestBookingSaveDTO) {
        String id = bookingService.addBooking(requestBookingSaveDTO);
        return new ResponseEntity<StanderResponse>(
                new StanderResponse(201, id + " Saved Succecfully ", id),
                HttpStatus.CREATED
        );
    }
//
//    @GetMapping(
//            params = {"stateType","page","size"},
//            path = {"/getOderDetails"}
//    )
//    @PreAuthorize("hasAuthority('ROLE_ADMIN') or hasAuthority('ROLE_MODERATOR')")
//    public ResponseEntity<StanderResponse>getOderDetail(
//            @RequestParam(value = "statetype")String statetype,
//            @RequestParam(value = "page")int page,
//            @RequestParam(value = "size")int size
//    ) {
//        paginatedResponseBookingDTO paginatedResponseBookingDTO = null;
//        if (statetype.equalsIgnoreCase("active") | statetype.equalsIgnoreCase("inactive")) {
//            boolean status = statetype.equalsIgnoreCase("active") ? true : false;
//            paginatedResponseBookingDTO = bookingService.getAllDetails(status, page, size);
//        } else {
//
//        }
//    }
}