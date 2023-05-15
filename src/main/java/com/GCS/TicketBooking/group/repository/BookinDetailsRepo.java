package com.GCS.TicketBooking.group.repository;

import com.GCS.TicketBooking.group.entity.BookingDeails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

@Repository
@EnableJpaRepositories
public interface BookinDetailsRepo extends JpaRepository<BookingDeails,Integer> {
}
