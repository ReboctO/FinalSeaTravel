-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 13, 2025 at 05:03 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ferry_booking`
--

-- --------------------------------------------------------

--
-- Table structure for table `passenger_type`
--

CREATE TABLE `passenger_type` (
  `PASSENGER_TYPE_ID` int(11) NOT NULL,
  `PASSENGER_TYPE_NAME` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pricing_rules`
--

CREATE TABLE `pricing_rules` (
  `id` int(11) NOT NULL,
  `origin` varchar(255) DEFAULT NULL,
  `destination` varchar(255) DEFAULT NULL,
  `base_price` decimal(10,2) DEFAULT NULL,
  `per_adult` decimal(10,2) DEFAULT NULL,
  `per_child` decimal(10,2) DEFAULT NULL,
  `passenger_type` enum('Adult','Child') NOT NULL,
  `shipping_line` varchar(255) DEFAULT NULL,
  `default_seats` int(11) DEFAULT 100
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pricing_rules`
--

INSERT INTO `pricing_rules` (`id`, `origin`, `destination`, `base_price`, `per_adult`, `per_child`, `passenger_type`, `shipping_line`, `default_seats`) VALUES
(1, 'Cebu', 'Bohol', 500.00, 300.00, 150.00, 'Adult', NULL, 100),
(2, 'Cebu', 'Leyte', 700.00, 350.00, 200.00, 'Adult', NULL, 100),
(3, 'Iloilo', 'Bacolod', 400.00, 250.00, 100.00, 'Adult', NULL, 100);

-- --------------------------------------------------------

--
-- Table structure for table `seats`
--

CREATE TABLE `seats` (
  `id` int(11) NOT NULL,
  `route_id` int(11) NOT NULL,
  `seat_number` varchar(10) NOT NULL,
  `is_available` tinyint(1) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `seats`
--

INSERT INTO `seats` (`id`, `route_id`, `seat_number`, `is_available`) VALUES
(1, 1, 'A1', 1),
(2, 1, 'A2', 1),
(3, 1, 'A3', 1),
(4, 1, 'A4', 1),
(5, 1, 'A5', 1),
(6, 1, 'A6', 1),
(7, 1, 'A7', 1),
(8, 1, 'A8', 1),
(9, 1, 'A9', 1),
(10, 1, 'A10', 1),
(11, 1, 'B1', 1),
(12, 1, 'B2', 1),
(13, 1, 'B3', 1),
(14, 1, 'B4', 1),
(15, 1, 'B5', 1),
(16, 1, 'B6', 1),
(17, 1, 'B7', 1),
(18, 1, 'B8', 1),
(19, 1, 'B9', 1),
(20, 1, 'B10', 1),
(21, 1, 'C1', 1),
(22, 1, 'C2', 1),
(23, 1, 'C3', 1),
(24, 1, 'C4', 1),
(25, 1, 'C5', 1),
(26, 1, 'C6', 1),
(27, 1, 'C7', 1),
(28, 1, 'C8', 1),
(29, 1, 'C9', 1),
(30, 1, 'C10', 1),
(31, 2, 'D1', 1),
(32, 2, 'D2', 1),
(33, 2, 'D3', 1),
(34, 2, 'D4', 1),
(35, 2, 'D5', 1),
(36, 2, 'D6', 1),
(37, 2, 'D7', 1),
(38, 2, 'D8', 1),
(39, 2, 'D9', 1),
(40, 2, 'D10', 1),
(41, 3, 'E1', 1),
(42, 3, 'E2', 1),
(43, 3, 'E3', 1),
(44, 3, 'E4', 1),
(45, 3, 'E5', 1),
(46, 3, 'E6', 1),
(47, 3, 'E7', 1),
(48, 3, 'E8', 1),
(49, 3, 'E9', 1),
(50, 3, 'E10', 1),
(51, 4, 'F1', 1),
(52, 4, 'F2', 1),
(53, 4, 'F3', 1),
(54, 4, 'F4', 1),
(55, 4, 'F5', 1),
(56, 4, 'F6', 1),
(57, 4, 'F7', 1),
(58, 4, 'F8', 1),
(59, 4, 'F9', 1),
(60, 4, 'F10', 1),
(61, 5, 'G1', 1),
(62, 5, 'G2', 1),
(63, 5, 'G3', 1),
(64, 5, 'G4', 1),
(65, 5, 'G5', 1),
(66, 5, 'G6', 1),
(67, 5, 'G7', 1),
(68, 5, 'G8', 1),
(69, 5, 'G9', 1),
(70, 5, 'G10', 1);

-- --------------------------------------------------------

--
-- Table structure for table `trips`
--

CREATE TABLE `trips` (
  `id` int(11) NOT NULL,
  `origin` varchar(255) DEFAULT NULL,
  `destination` varchar(255) DEFAULT NULL,
  `shipping_line` varchar(255) DEFAULT NULL,
  `available_seats` int(11) DEFAULT NULL CHECK (`available_seats` >= 0),
  `price` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `trips`
--

INSERT INTO `trips` (`id`, `origin`, `destination`, `shipping_line`, `available_seats`, `price`) VALUES
(1, 'Cebu', 'Bohol', 'OceanJet', 100, 900.00),
(2, 'Cebu', 'Leyte', 'Lite Ferries', 80, 1200.00),
(3, 'Iloilo', 'Bacolod', 'FastCat', 120, 1000.00),
(4, 'Cebu', 'Bohol', 'OceanJet', 50, 900.00),
(6, 'Cebu', 'Dumaguete', 'Montenegro', 50, 600.00),
(7, 'Iloilo', 'Bacolod', 'FastCat', 50, 1100.00),
(8, 'Dumaguete', 'Siquijor', 'OceanJet', 50, 800.00);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `USERS_ID` int(11) NOT NULL,
  `FIRST_NAME` varchar(255) DEFAULT NULL,
  `LAST_NAME` varchar(255) DEFAULT NULL,
  `EMAIL_NAME` varchar(255) DEFAULT NULL,
  `PASSWORD` varchar(255) DEFAULT NULL,
  `CONTACT_NUMBER` varchar(20) DEFAULT NULL,
  `ADDRESS` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `passenger_type`
--
ALTER TABLE `passenger_type`
  ADD PRIMARY KEY (`PASSENGER_TYPE_ID`);

--
-- Indexes for table `pricing_rules`
--
ALTER TABLE `pricing_rules`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `seats`
--
ALTER TABLE `seats`
  ADD PRIMARY KEY (`id`),
  ADD KEY `route_id` (`route_id`);

--
-- Indexes for table `trips`
--
ALTER TABLE `trips`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`USERS_ID`),
  ADD UNIQUE KEY `EMAIL_NAME` (`EMAIL_NAME`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `passenger_type`
--
ALTER TABLE `passenger_type`
  MODIFY `PASSENGER_TYPE_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pricing_rules`
--
ALTER TABLE `pricing_rules`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `seats`
--
ALTER TABLE `seats`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=128;

--
-- AUTO_INCREMENT for table `trips`
--
ALTER TABLE `trips`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `USERS_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `seats`
--
ALTER TABLE `seats`
  ADD CONSTRAINT `seats_ibfk_1` FOREIGN KEY (`route_id`) REFERENCES `seat_summary` (`route_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
