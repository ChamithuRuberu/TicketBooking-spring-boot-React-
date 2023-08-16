package com.GCS.TicketBooking.group.service;

import com.GCS.TicketBooking.group.dto.RequestBookingSaveDTO;
import com.GCS.TicketBooking.group.dto.paginated.paginatedResponseBookingDTO;

public interface BookingService {
    String addBooking(RequestBookingSaveDTO requestBookingSaveDTO);

}
