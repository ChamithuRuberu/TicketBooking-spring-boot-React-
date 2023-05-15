package com.GCS.TicketBooking.group.repository;

import com.GCS.TicketBooking.group.dto.queryinterfaces.ResponseBookingDetailsInterface;
import com.GCS.TicketBooking.group.entity.Booking;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@EnableJpaRepositories
public interface BookingRepo extends JpaRepository<Booking,Integer> {

//    @Query(value = "select c.userName as userName,c.Date,c.TotalPrice  from user c where c.active?1",nativeQuery = true)
//    List<ResponseBookingDetailsInterface> getAllBookingDetails(boolean status, Pageable pageable);
}
