-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3305
-- Generation Time: Dec 08, 2023 at 05:37 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test`
--

-- --------------------------------------------------------

--
-- Table structure for table `crew_actor`
--

CREATE TABLE `crew_actor` (
  `Name` varchar(30) NOT NULL,
  `Bio` mediumtext NOT NULL,
  `DOB` date NOT NULL,
  `CID` int(11) NOT NULL,
  `Poster_URL` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `crew_actor`
--

INSERT INTO `crew_actor` (`Name`, `Bio`, `DOB`, `CID`, `Poster_URL`) VALUES
('Naomi Watts', 'Naomi Ellen Watts (born 28 September 1968) is a British actress. After her family moved to Australia, she made her film debut there in the drama For Love Alone (1986) and then appeared in three television series, Hey Dad..! (1990), Brides of Christ (1991), and Home and Away (1991), and the film Flirting (1991). After moving to the United States, Watts initially struggled as an actress, taking roles in small-scale films until she starred in David Lynch\'s psychological thriller Mulholland Drive in 2001 as an aspiring actress. This role started her rise to international prominence.\r\n\r\nWatts then played a tormented journalist in the horror remake The Ring (2002). She was nominated for the Academy Award for Best Actress for her performance as a grief-stricken mother in Alejandro González Iñárritu\'s film 21 Grams (2003). Her profile continued to grow with starring roles in I Heart Huckabees (2004), King Kong (2005), Eastern Promises (2007), and The International (2009).\r\n\r\nFor her role as Maria Bennett in the disaster film The Impossible (2012), Watts received another Academy Award nomination for Best Actress. In the 2010s, she starred in such films as Birdman (2014), St. Vincent (2014), While We\'re Young (2015), The Glass Castle (2017), and Luce (2019). Watts also continued to act in blockbusters, with appearances in the Divergent franchise (2015–2016), and she ventured into television with the Showtime mystery drama series Twin Peaks (2017) and the biographical limited series The Loudest Voice (2019).\r\n\r\nWatts is particularly known for her work in remakes and independent productions with dark or tragic themes, as well as portrayals of characters that endure loss or suffering.', '1968-09-28', 0, 'https://m.media-amazon.com/images/M/MV5BMjIzMjY1NTA4OF5BMl5BanBnXkFtZTcwNjk3MDYwOQ@@._V1_.jpg'),
('Tom Hanks', 'Thomas Jeffrey Hanks (born July 9, 1956) is an American actor and filmmaker. Known for both his comedic and dramatic roles, Hanks is one of the most popular and recognizable film stars worldwide, and is widely regarded as an American cultural icon.  Hanks made his breakthrough with leading roles in the comedies Splash (1984) and Big (1988). He won two consecutive Academy Awards for Best Actor for starring as a gay lawyer suffering from AIDS in Philadelphia (1993) and a young man with below-average IQ in Forrest Gump (1994). Hanks collaborated with film director Steven Spielberg on five films: Saving Private Ryan (1998), Catch Me If You Can (2002), The Terminal (2004), Bridge of Spies (2015), and The Post (2017), as well as the 2001 miniseries Band of Brothers, which launched him as a director, producer, and screenwriter.  Hanks\' other notable films include the romantic comedies Sleepless in Seattle (1993) and You\'ve Got Mail (1998); the dramas Apollo 13 (1995), The Green Mile (1999), Cast Away (2000), Road to Perdition (2002), and Cloud Atlas (2012); and the biographical dramas Saving Mr. Banks (2013), Captain Phillips (2013), Sully (2016), and A Beautiful Day in the Neighborhood (2019). He has also appeared as the title character in the Robert Langdon film series, and has voiced Sheriff Woody in the Toy Story film series.', '1956-09-07', 80703, 'https://cdn.theatlantic.com/thumbor/doPfvTghjUX1QpglS1l35uVxZYs=/0x0:4000x5000/648x810/media/img/2023/05/02/TomHanks_Atlantic_web/original.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `crew_awards`
--

CREATE TABLE `crew_awards` (
  `Name` varchar(40) NOT NULL,
  `Year` int(11) NOT NULL,
  `CID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `crew_awards`
--

INSERT INTO `crew_awards` (`Name`, `Year`, `CID`) VALUES
('Academy Award for Best Actor in a Leadin', 1994, 80703),
('Academy Award for Best Actor in a Leadin', 1995, 80703),
('Saturn Award for Best Actress', 2002, 0),
('The National Society of Film Critics Awa', 2002, 0);

-- --------------------------------------------------------

--
-- Table structure for table `crew_filmography`
--

CREATE TABLE `crew_filmography` (
  `CID` int(11) NOT NULL,
  `MID` int(11) NOT NULL,
  `Role` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `crew_filmography`
--

INSERT INTO `crew_filmography` (`CID`, `MID`, `Role`) VALUES
(0, 113, 'Actress'),
(0, 159753, 'Actress');

-- --------------------------------------------------------

--
-- Table structure for table `critic`
--

CREATE TABLE `critic` (
  `UID` int(11) NOT NULL,
  `Company` varchar(50) NOT NULL,
  `Name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `critic`
--

INSERT INTO `critic` (`UID`, `Company`, `Name`) VALUES
(113, 'The House Reporter', 'Ken ');

-- --------------------------------------------------------

--
-- Table structure for table `movie`
--

CREATE TABLE `movie` (
  `MID` int(255) NOT NULL,
  `Title` varchar(255) NOT NULL,
  `Year` int(255) NOT NULL,
  `Poster_URL` varchar(255) NOT NULL,
  `Summary` varchar(10000) NOT NULL,
  `Director` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `movie`
--

INSERT INTO `movie` (`MID`, `Title`, `Year`, `Poster_URL`, `Summary`, `Director`) VALUES
(113, 'Mulholland Drive', 2001, 'https://m.media-amazon.com/images/I/51cDXGXoGqL._AC_UF1000,1000_QL80_.jpg', 'A dark-haired woman is left amnesiac after a car crash. She wanders the streets of Los Angeles in a daze before taking refuge in an apartment. There she is discovered by Betty, a wholesome Midwestern blonde who has come to the City of Angels seeking fame as an actress. Together, the two attempt to solve the mystery of Rita\'s true identity. The story is set in a dream-like Los Angeles, spoilt neither by traffic jams nor smog.', 'David Lynch'),
(123, 'Forrest Gump', 1994, 'https://i.ebayimg.com/images/g/y9gAAOSwUQhi-9Nq/s-l1200.jpg', 'Slow-witted Forrest Gump has never thought of himself as disadvantaged, and thanks to his supportive mother, he leads anything but a restricted life. Whether dominating on the gridiron as a college football star, fighting in Vietnam or captaining a shrimp boat, Forrest inspires people with his childlike optimism. But one person Forrest cares about most may be the most difficult to save -- his childhood love, the sweet but troubled Jenny', 'Robert Zemeckis'),
(27194, '12 Years a Slave', 2013, 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQUww1TfS08PJVmSN_szD3GKZ19zS-EtfBazbrlJ-ss37vISknD', 'In the years before the Civil War, Solomon Northup (Chiwetel Ejiofor), a free black man from upstate New York, is kidnapped and sold into slavery in the South. Subjected to the cruelty of one malevolent owner (Michael Fassbender), he also finds unexpected kindness from another, as he struggles continually to survive and maintain some of his dignity. Then in the 12th year of the disheartening ordeal, a chance meeting with an abolitionist from Canada changes Solomon\'s life forever.', 'Steve McQueen'),
(40976, 'Taxi Driver', 1976, 'https://upload.wikimedia.org/wikipedia/en/3/33/Taxi_Driver_%281976_film_poster%29.jpg', 'Suffering from insomnia, disturbed loner Travis Bickle takes a job as a New York City cabbie, haunting the streets nightly, growing increasingly detached from reality as he dreams of cleaning up the filthy city. When Travis meets pretty campaign worker Betsy , he becomes obsessed with the idea of saving the world, first plotting to assassinate a presidential candidate, then directing his attentions toward rescuing 12-year-old prostitute Iris.', 'Martin Scorsese'),
(72196, 'Babel', 2006, 'https://m.media-amazon.com/images/I/51poif023LL._AC_UF894,1000_QL80_.jpg', 'An accident connects four groups of people on three different continents: two young Moroccan goatherds, a vacationing American couple (Brad Pitt, Cate Blanchett), a deaf Japanese teen and her father, and a Mexican nanny who takes her young charges across a border without parental permission.', ' Alejandro González Iñárritu'),
(159753, 'The Impossible', 2012, 'https://movieguide.b-cdn.net/wp-content/uploads/2013/01/p9341404_v_v8_aa.jpg', 'In December 2004, close-knit family Maria (Naomi Watts), Henry (Ewan McGregor) and their three sons begin their winter vacation in Thailand. But the day after Christmas, the idyllic holiday turns into an incomprehensible nightmare when a terrifying roar rises from the depths of the sea, followed by a wall of black water that devours everything in its path. Though Maria and her family face their darkest hour, unexpected displays of kindness and courage ameliorate their terror.', 'J. A. Bayona');

-- --------------------------------------------------------

--
-- Table structure for table `movie_char`
--

CREATE TABLE `movie_char` (
  `MID` int(11) NOT NULL,
  `CID` int(11) NOT NULL,
  `Cname` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `movie_char`
--

INSERT INTO `movie_char` (`MID`, `CID`, `Cname`) VALUES
(113, 0, 'Betty'),
(123, 80703, 'Forrest Gump');

-- --------------------------------------------------------

--
-- Table structure for table `movie_soundtrack`
--

CREATE TABLE `movie_soundtrack` (
  `MID` int(11) NOT NULL,
  `Title` varchar(30) NOT NULL,
  `ostId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `movie_soundtrack`
--

INSERT INTO `movie_soundtrack` (`MID`, `Title`, `ostId`) VALUES
(113, 'Mulholland Dr. Theme', 910),
(123, 'Forrest Gump Suite', 86334);

-- --------------------------------------------------------

--
-- Table structure for table `network`
--

CREATE TABLE `network` (
  `UID` int(11) NOT NULL,
  `Following_UID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `network`
--

INSERT INTO `network` (`UID`, `Following_UID`) VALUES
(20974, 113);

-- --------------------------------------------------------

--
-- Table structure for table `review`
--

CREATE TABLE `review` (
  `UID` int(11) NOT NULL,
  `MID` int(11) NOT NULL,
  `RID` int(11) NOT NULL,
  `Description` varchar(10000) NOT NULL,
  `approved` tinyint(1) NOT NULL,
  `rating` double(11,0) NOT NULL,
  `popularity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `review`
--

INSERT INTO `review` (`UID`, `MID`, `RID`, `Description`, `approved`, `rating`, `popularity`) VALUES
(113, 113, 1, 'BEST MOVIE EVER!', 1, 5, 1),
(113, 113, 56236, 'COOL!', 0, 3, 0),
(20974, 123, 26430, 'Greatest love story ever been told', 1, 5, 26),
(20974, 123, 49416, 'This movie changes my life!', 1, 5, 13),
(20974, 27194, 86844, 'This movie truly deserves the Best Picture at the Academy, it captures the story that needs to be heard and ultimately, it is an instant classic not only about race, but humanity itself. I love the cinematography works in this movie. ', 1, 5, 0),
(20974, 27194, 93990, 'This is hands down one of the best movies of the year!', 0, 5, 0),
(20974, 40976, 30702, 'An instant classic. Hats down to you, maestro Scorsese and the legendary Robert De Niro for creating this timeless masterpiece.', 1, 4, 24);

-- --------------------------------------------------------

--
-- Table structure for table `review_crew`
--

CREATE TABLE `review_crew` (
  `UID` int(11) NOT NULL,
  `CID` int(11) NOT NULL,
  `RID` int(11) NOT NULL,
  `Description` mediumtext NOT NULL,
  `approved` tinyint(1) NOT NULL,
  `rating` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `review_crew`
--

INSERT INTO `review_crew` (`UID`, `CID`, `RID`, `Description`, `approved`, `rating`) VALUES
(20974, 0, 65618, 'She\'s amazing indeed. ', 1, 4);

-- --------------------------------------------------------

--
-- Table structure for table `screening`
--

CREATE TABLE `screening` (
  `MID` int(11) NOT NULL,
  `Time` time NOT NULL,
  `Venue` varchar(50) NOT NULL,
  `Date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `screening`
--

INSERT INTO `screening` (`MID`, `Time`, `Venue`, `Date`) VALUES
(113, '10:45:00', 'Sunridge Cinema', '2023-12-01'),
(113, '15:00:00', 'Sunridge Cinema', '2023-12-01'),
(123, '13:14:00', 'Chinook Cineplex', '2020-12-06');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `user_name` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `admin` tinyint(1) NOT NULL,
  `critic` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `user_id`, `user_name`, `password`, `admin`, `critic`) VALUES
(2, 113, 'ken', '123', 1, 1),
(18, 20974, 'koudo', '123', 0, 0),
(20, 74215, 'cool ', '123', 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `user_watchlist`
--

CREATE TABLE `user_watchlist` (
  `UID` int(20) NOT NULL,
  `MID` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `user_watchlist`
--

INSERT INTO `user_watchlist` (`UID`, `MID`) VALUES
(113, 113);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `crew_actor`
--
ALTER TABLE `crew_actor`
  ADD PRIMARY KEY (`CID`);

--
-- Indexes for table `crew_awards`
--
ALTER TABLE `crew_awards`
  ADD PRIMARY KEY (`Name`,`Year`);

--
-- Indexes for table `critic`
--
ALTER TABLE `critic`
  ADD PRIMARY KEY (`UID`);

--
-- Indexes for table `movie`
--
ALTER TABLE `movie`
  ADD PRIMARY KEY (`MID`);

--
-- Indexes for table `movie_soundtrack`
--
ALTER TABLE `movie_soundtrack`
  ADD PRIMARY KEY (`ostId`);

--
-- Indexes for table `network`
--
ALTER TABLE `network`
  ADD PRIMARY KEY (`UID`,`Following_UID`);

--
-- Indexes for table `review`
--
ALTER TABLE `review`
  ADD PRIMARY KEY (`UID`,`MID`,`RID`),
  ADD UNIQUE KEY `UID` (`UID`,`MID`,`RID`);

--
-- Indexes for table `review_crew`
--
ALTER TABLE `review_crew`
  ADD PRIMARY KEY (`UID`,`CID`,`RID`);

--
-- Indexes for table `screening`
--
ALTER TABLE `screening`
  ADD PRIMARY KEY (`MID`,`Time`,`Venue`,`Date`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `user_name` (`user_name`),
  ADD KEY `password` (`password`);

--
-- Indexes for table `user_watchlist`
--
ALTER TABLE `user_watchlist`
  ADD PRIMARY KEY (`UID`,`MID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
