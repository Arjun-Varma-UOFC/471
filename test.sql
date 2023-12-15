-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3305
-- Generation Time: Dec 15, 2023 at 06:44 AM
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
-- Database: `phpmyadmin`
--
CREATE DATABASE IF NOT EXISTS `phpmyadmin` DEFAULT CHARACTER SET utf8 COLLATE utf8_bin;
USE `phpmyadmin`;

-- --------------------------------------------------------

--
-- Table structure for table `pma__bookmark`
--

CREATE TABLE `pma__bookmark` (
  `id` int(10) UNSIGNED NOT NULL,
  `dbase` varchar(255) NOT NULL DEFAULT '',
  `user` varchar(255) NOT NULL DEFAULT '',
  `label` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `query` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Bookmarks';

-- --------------------------------------------------------

--
-- Table structure for table `pma__central_columns`
--

CREATE TABLE `pma__central_columns` (
  `db_name` varchar(64) NOT NULL,
  `col_name` varchar(64) NOT NULL,
  `col_type` varchar(64) NOT NULL,
  `col_length` text DEFAULT NULL,
  `col_collation` varchar(64) NOT NULL,
  `col_isNull` tinyint(1) NOT NULL,
  `col_extra` varchar(255) DEFAULT '',
  `col_default` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Central list of columns';

-- --------------------------------------------------------

--
-- Table structure for table `pma__column_info`
--

CREATE TABLE `pma__column_info` (
  `id` int(5) UNSIGNED NOT NULL,
  `db_name` varchar(64) NOT NULL DEFAULT '',
  `table_name` varchar(64) NOT NULL DEFAULT '',
  `column_name` varchar(64) NOT NULL DEFAULT '',
  `comment` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `mimetype` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `transformation` varchar(255) NOT NULL DEFAULT '',
  `transformation_options` varchar(255) NOT NULL DEFAULT '',
  `input_transformation` varchar(255) NOT NULL DEFAULT '',
  `input_transformation_options` varchar(255) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Column information for phpMyAdmin';

-- --------------------------------------------------------

--
-- Table structure for table `pma__designer_settings`
--

CREATE TABLE `pma__designer_settings` (
  `username` varchar(64) NOT NULL,
  `settings_data` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Settings related to Designer';

-- --------------------------------------------------------

--
-- Table structure for table `pma__export_templates`
--

CREATE TABLE `pma__export_templates` (
  `id` int(5) UNSIGNED NOT NULL,
  `username` varchar(64) NOT NULL,
  `export_type` varchar(10) NOT NULL,
  `template_name` varchar(64) NOT NULL,
  `template_data` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Saved export templates';

-- --------------------------------------------------------

--
-- Table structure for table `pma__favorite`
--

CREATE TABLE `pma__favorite` (
  `username` varchar(64) NOT NULL,
  `tables` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Favorite tables';

-- --------------------------------------------------------

--
-- Table structure for table `pma__history`
--

CREATE TABLE `pma__history` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `username` varchar(64) NOT NULL DEFAULT '',
  `db` varchar(64) NOT NULL DEFAULT '',
  `table` varchar(64) NOT NULL DEFAULT '',
  `timevalue` timestamp NOT NULL DEFAULT current_timestamp(),
  `sqlquery` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='SQL history for phpMyAdmin';

-- --------------------------------------------------------

--
-- Table structure for table `pma__navigationhiding`
--

CREATE TABLE `pma__navigationhiding` (
  `username` varchar(64) NOT NULL,
  `item_name` varchar(64) NOT NULL,
  `item_type` varchar(64) NOT NULL,
  `db_name` varchar(64) NOT NULL,
  `table_name` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Hidden items of navigation tree';

-- --------------------------------------------------------

--
-- Table structure for table `pma__pdf_pages`
--

CREATE TABLE `pma__pdf_pages` (
  `db_name` varchar(64) NOT NULL DEFAULT '',
  `page_nr` int(10) UNSIGNED NOT NULL,
  `page_descr` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='PDF relation pages for phpMyAdmin';

-- --------------------------------------------------------

--
-- Table structure for table `pma__recent`
--

CREATE TABLE `pma__recent` (
  `username` varchar(64) NOT NULL,
  `tables` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Recently accessed tables';

--
-- Dumping data for table `pma__recent`
--

INSERT INTO `pma__recent` (`username`, `tables`) VALUES
('root', '[{\"db\":\"test\",\"table\":\"network\"},{\"db\":\"test\",\"table\":\"user\"},{\"db\":\"test\",\"table\":\"review\"},{\"db\":\"test\",\"table\":\"movie\"},{\"db\":\"test\",\"table\":\"crew_actor\"},{\"db\":\"test\",\"table\":\"review_crew\"},{\"db\":\"test\",\"table\":\"crew_filmography\"},{\"db\":\"test\",\"table\":\"movie_soundtrack\"},{\"db\":\"test\",\"table\":\"crew_awards\"},{\"db\":\"test\",\"table\":\"user_watchlist\"}]');

-- --------------------------------------------------------

--
-- Table structure for table `pma__relation`
--

CREATE TABLE `pma__relation` (
  `master_db` varchar(64) NOT NULL DEFAULT '',
  `master_table` varchar(64) NOT NULL DEFAULT '',
  `master_field` varchar(64) NOT NULL DEFAULT '',
  `foreign_db` varchar(64) NOT NULL DEFAULT '',
  `foreign_table` varchar(64) NOT NULL DEFAULT '',
  `foreign_field` varchar(64) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Relation table';

-- --------------------------------------------------------

--
-- Table structure for table `pma__savedsearches`
--

CREATE TABLE `pma__savedsearches` (
  `id` int(5) UNSIGNED NOT NULL,
  `username` varchar(64) NOT NULL DEFAULT '',
  `db_name` varchar(64) NOT NULL DEFAULT '',
  `search_name` varchar(64) NOT NULL DEFAULT '',
  `search_data` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Saved searches';

-- --------------------------------------------------------

--
-- Table structure for table `pma__table_coords`
--

CREATE TABLE `pma__table_coords` (
  `db_name` varchar(64) NOT NULL DEFAULT '',
  `table_name` varchar(64) NOT NULL DEFAULT '',
  `pdf_page_number` int(11) NOT NULL DEFAULT 0,
  `x` float UNSIGNED NOT NULL DEFAULT 0,
  `y` float UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Table coordinates for phpMyAdmin PDF output';

-- --------------------------------------------------------

--
-- Table structure for table `pma__table_info`
--

CREATE TABLE `pma__table_info` (
  `db_name` varchar(64) NOT NULL DEFAULT '',
  `table_name` varchar(64) NOT NULL DEFAULT '',
  `display_field` varchar(64) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Table information for phpMyAdmin';

-- --------------------------------------------------------

--
-- Table structure for table `pma__table_uiprefs`
--

CREATE TABLE `pma__table_uiprefs` (
  `username` varchar(64) NOT NULL,
  `db_name` varchar(64) NOT NULL,
  `table_name` varchar(64) NOT NULL,
  `prefs` text NOT NULL,
  `last_update` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Tables'' UI preferences';

-- --------------------------------------------------------

--
-- Table structure for table `pma__tracking`
--

CREATE TABLE `pma__tracking` (
  `db_name` varchar(64) NOT NULL,
  `table_name` varchar(64) NOT NULL,
  `version` int(10) UNSIGNED NOT NULL,
  `date_created` datetime NOT NULL,
  `date_updated` datetime NOT NULL,
  `schema_snapshot` text NOT NULL,
  `schema_sql` text DEFAULT NULL,
  `data_sql` longtext DEFAULT NULL,
  `tracking` set('UPDATE','REPLACE','INSERT','DELETE','TRUNCATE','CREATE DATABASE','ALTER DATABASE','DROP DATABASE','CREATE TABLE','ALTER TABLE','RENAME TABLE','DROP TABLE','CREATE INDEX','DROP INDEX','CREATE VIEW','ALTER VIEW','DROP VIEW') DEFAULT NULL,
  `tracking_active` int(1) UNSIGNED NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Database changes tracking for phpMyAdmin';

-- --------------------------------------------------------

--
-- Table structure for table `pma__userconfig`
--

CREATE TABLE `pma__userconfig` (
  `username` varchar(64) NOT NULL,
  `timevalue` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `config_data` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='User preferences storage for phpMyAdmin';

--
-- Dumping data for table `pma__userconfig`
--

INSERT INTO `pma__userconfig` (`username`, `timevalue`, `config_data`) VALUES
('root', '2023-12-15 05:38:30', '{\"Console\\/Mode\":\"collapse\"}');

-- --------------------------------------------------------

--
-- Table structure for table `pma__usergroups`
--

CREATE TABLE `pma__usergroups` (
  `usergroup` varchar(64) NOT NULL,
  `tab` varchar(64) NOT NULL,
  `allowed` enum('Y','N') NOT NULL DEFAULT 'N'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='User groups with configured menu items';

-- --------------------------------------------------------

--
-- Table structure for table `pma__users`
--

CREATE TABLE `pma__users` (
  `username` varchar(64) NOT NULL,
  `usergroup` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Users and their assignments to user groups';

--
-- Indexes for dumped tables
--

--
-- Indexes for table `pma__bookmark`
--
ALTER TABLE `pma__bookmark`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pma__central_columns`
--
ALTER TABLE `pma__central_columns`
  ADD PRIMARY KEY (`db_name`,`col_name`);

--
-- Indexes for table `pma__column_info`
--
ALTER TABLE `pma__column_info`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `db_name` (`db_name`,`table_name`,`column_name`);

--
-- Indexes for table `pma__designer_settings`
--
ALTER TABLE `pma__designer_settings`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `pma__export_templates`
--
ALTER TABLE `pma__export_templates`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `u_user_type_template` (`username`,`export_type`,`template_name`);

--
-- Indexes for table `pma__favorite`
--
ALTER TABLE `pma__favorite`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `pma__history`
--
ALTER TABLE `pma__history`
  ADD PRIMARY KEY (`id`),
  ADD KEY `username` (`username`,`db`,`table`,`timevalue`);

--
-- Indexes for table `pma__navigationhiding`
--
ALTER TABLE `pma__navigationhiding`
  ADD PRIMARY KEY (`username`,`item_name`,`item_type`,`db_name`,`table_name`);

--
-- Indexes for table `pma__pdf_pages`
--
ALTER TABLE `pma__pdf_pages`
  ADD PRIMARY KEY (`page_nr`),
  ADD KEY `db_name` (`db_name`);

--
-- Indexes for table `pma__recent`
--
ALTER TABLE `pma__recent`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `pma__relation`
--
ALTER TABLE `pma__relation`
  ADD PRIMARY KEY (`master_db`,`master_table`,`master_field`),
  ADD KEY `foreign_field` (`foreign_db`,`foreign_table`);

--
-- Indexes for table `pma__savedsearches`
--
ALTER TABLE `pma__savedsearches`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `u_savedsearches_username_dbname` (`username`,`db_name`,`search_name`);

--
-- Indexes for table `pma__table_coords`
--
ALTER TABLE `pma__table_coords`
  ADD PRIMARY KEY (`db_name`,`table_name`,`pdf_page_number`);

--
-- Indexes for table `pma__table_info`
--
ALTER TABLE `pma__table_info`
  ADD PRIMARY KEY (`db_name`,`table_name`);

--
-- Indexes for table `pma__table_uiprefs`
--
ALTER TABLE `pma__table_uiprefs`
  ADD PRIMARY KEY (`username`,`db_name`,`table_name`);

--
-- Indexes for table `pma__tracking`
--
ALTER TABLE `pma__tracking`
  ADD PRIMARY KEY (`db_name`,`table_name`,`version`);

--
-- Indexes for table `pma__userconfig`
--
ALTER TABLE `pma__userconfig`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `pma__usergroups`
--
ALTER TABLE `pma__usergroups`
  ADD PRIMARY KEY (`usergroup`,`tab`,`allowed`);

--
-- Indexes for table `pma__users`
--
ALTER TABLE `pma__users`
  ADD PRIMARY KEY (`username`,`usergroup`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `pma__bookmark`
--
ALTER TABLE `pma__bookmark`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pma__column_info`
--
ALTER TABLE `pma__column_info`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pma__export_templates`
--
ALTER TABLE `pma__export_templates`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pma__history`
--
ALTER TABLE `pma__history`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pma__pdf_pages`
--
ALTER TABLE `pma__pdf_pages`
  MODIFY `page_nr` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pma__savedsearches`
--
ALTER TABLE `pma__savedsearches`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- Database: `test`
--
CREATE DATABASE IF NOT EXISTS `test` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `test`;

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
('David Lynch', 'David Keith Lynch is an American filmmaker, painter, visual artist, musician and actor. Lynch has received critical acclaim for his films, which are often distinguished by their surrealist qualities. He has received numerous accolades, including the Golden Lion in 2006 and an Honorary Academy Award in 2019. ', '1946-01-20', 1, 'https://m.media-amazon.com/images/M/MV5BMTQ1MTY2MTY2Nl5BMl5BanBnXkFtZTcwMDg1ODYwNA@@._V1_FMjpg_UX1000_.jpg'),
('Robert Zemeckis', 'Robert Lee Zemeckis is an American filmmaker. He first came to public attention as the director of the action-adventure romantic comedy Romancing the Stone, the science-fiction comedy Back to the Future film trilogy, and the live-action/animated comedy Who Framed Roger Rabbit.', '1952-05-14', 2, 'https://m.media-amazon.com/images/M/MV5BMTgyMTMzMDUyNl5BMl5BanBnXkFtZTcwODA0ODMyMw@@._V1_.jpg'),
('Steve McQueen', 'Sir Steve Rodney McQueen CBE is a British film director, film producer, screenwriter, and video artist. For services to the visual arts, he was appointed Commander of the Order of the British Empire in 2011. In 2014 he was included in Time magazine\'s annual Time 100 list of the \"most influential people in the world', '1969-10-09', 3, 'https://m.media-amazon.com/images/M/MV5BMTQzNjQ5NDUxNl5BMl5BanBnXkFtZTcwNjA0MTg1Ng@@._V1_.jpg'),
('Alejandro González Iñárritu', 'Alejandro González Iñárritu is a Mexican filmmaker. He is primarily known for making modern psychological drama films about the human condition.', '1963-08-15', 4, 'https://variety.com/wp-content/uploads/2018/10/alejandro_gonzc3a1lez-ic3b1c3a1rritu.png'),
('Martin Scorsese', 'Martin Charles Scorsese is an American and Italian director, producer, screenwriter and actor. He emerged as one of the major figures of the New Hollywood era', '1942-11-17', 5, 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Martin_Scorsese_MFF_2023.jpg'),
('J.A Bayona', 'Juan Antonio García Bayona is a Spanish film director. He directed the 2007 horror film The Orphanage, the 2012 drama film The Impossible, and the 2016 fantasy drama film A Monster Calls', '1959-05-09', 6, 'https://m.media-amazon.com/images/M/MV5BMTg2MTU2ODUzOF5BMl5BanBnXkFtZTcwOTI5NjU3OA@@._V1_FMjpg_UX1000_.jpg'),
('Laura Harring', 'Laura Elena Gräfin von Bismarck-Schönhausen, known professionally as Laura Harring, is an American actress and beauty pageant titleholder who won Miss USA 1985 and later began acting in television and film. She is best known for her dual roles as Rita and Camilla Rhodes in the 2001 movie Mulholland Drive. ', '1964-03-03', 7, 'https://static.sweet.tv/images/cache/person_profiles/BD66WAISAJSW4MAL/30205-laura-herring.jpg'),
('Justin Theroux', 'Justin Paul Theroux is an American actor and filmmaker. He gained recognition for his work with director David Lynch in the mystery film Mulholland Drive and the horror film Inland Empire.', '1972-08-10', 8, 'https://cdn.britannica.com/61/247161-050-F1D09ABA/actor-Justin-Theroux-2018.jpg'),
('Alan Silvestri', 'Alan Anthony Silvestri (born March 26, 1950) is an American composer and conductor of film and television scores. He has been associated with director Robert Zemeckis since 1984, composing music for nearly all of his feature films including the Back to the Future film series, Who Framed Roger Rabbit, Death Becomes Her, Forrest Gump, Cast Away, and The Polar Express. Silvestri also scored many other popular movies, including Predator, The Abyss, Father of the Bride, The Bodyguard, Eraser, The Parent Trap, Stuart Little, The Mummy Returns, Lilo & Stitch, The Wild, Night at the Museum trilogy, G.I. Joe: The Rise of Cobra, The Croods, Ready Player One, and several Marvel Cinematic Universe films, including the Avengers films.\r\n\r\nHe is a two-time Academy Award and Golden Globe Award nominee, and a three-time Saturn Award and two-time Primetime Emmy Award recipient.', '1950-03-26', 9, 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Alan_Silvestri_2009.jpg/220px-Alan_Silvestri_2009.jpg'),
('Angelo Daniel Badalamenti', 'Angelo Daniel Badalamenti was an American composer and arranger best known for his work in composing for films. He is best known for his acclaimed collaborations with director David Lynch, notably the scores for Blue Velvet, the Twin Peaks television series, The Straight Story, and Mulholland Drive.', '1937-03-22', 10, 'https://media.newyorker.com/photos/63a1e5c7cfe17300b7b16555/2:2/w_2560%2Cc_limit/Postscript-Angelo-Badalamenti%2520.jpg'),
('Cate Blanchett', 'One of the best actresses on this planet', '1969-05-14', 13, 'https://m.media-amazon.com/images/M/MV5BMTc1MDI0MDg1NV5BMl5BanBnXkFtZTgwMDM3OTAzMTE@._V1_.jpg'),
('Tom Hanks', 'Thomas Jeffrey Hanks (born July 9, 1956) is an American actor and filmmaker. Known for both his comedic and dramatic roles, Hanks is one of the most popular and recognizable film stars worldwide, and is widely regarded as an American cultural icon.  Hanks made his breakthrough with leading roles in the comedies Splash (1984) and Big (1988). He won two consecutive Academy Awards for Best Actor for starring as a gay lawyer suffering from AIDS in Philadelphia (1993) and a young man with below-average IQ in Forrest Gump (1994). Hanks collaborated with film director Steven Spielberg on five films: Saving Private Ryan (1998), Catch Me If You Can (2002), The Terminal (2004), Bridge of Spies (2015), and The Post (2017), as well as the 2001 miniseries Band of Brothers, which launched him as a director, producer, and screenwriter.  Hanks\' other notable films include the romantic comedies Sleepless in Seattle (1993) and You\'ve Got Mail (1998); the dramas Apollo 13 (1995), The Green Mile (1999), Cast Away (2000), Road to Perdition (2002), and Cloud Atlas (2012); and the biographical dramas Saving Mr. Banks (2013), Captain Phillips (2013), Sully (2016), and A Beautiful Day in the Neighborhood (2019). He has also appeared as the title character in the Robert Langdon film series, and has voiced Sheriff Woody in the Toy Story film series.', '1956-09-07', 80703, 'https://cdn.theatlantic.com/thumbor/doPfvTghjUX1QpglS1l35uVxZYs=/0x0:4000x5000/648x810/media/img/2023/05/02/TomHanks_Atlantic_web/original.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `crew_awards`
--

CREATE TABLE `crew_awards` (
  `Name` varchar(100) NOT NULL,
  `Year` int(11) NOT NULL,
  `CID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `crew_awards`
--

INSERT INTO `crew_awards` (`Name`, `Year`, `CID`) VALUES
('Academy Award for Best Actor in a Leadin', 1994, 80703),
('Academy Award for Best Actor in a Leadin', 1995, 80703),
('ALMA Award for Outstanding Actress', 2002, 7),
('Bambi - International actress', 2019, 0),
('Glamour Award for Film Actress', 2006, 0),
('London Film Critics\' Circle Award for Actress of the Year', 2005, 0),
('Los Angeles Film Critics Association Award for Best Actress', 2015, 0),
('National Society of Film Critics Award for Best Actress', 2002, 0),
('Online Film & Television Association Awards for Best Actor in a Drama Series', 2017, 8),
('Saturn Award for Best Actress', 2002, 0),
('Screen Actors Guild Award for Outstanding Performance by a Cast in a Motion Picture', 2015, 0),
('Special Distinction Award', 2004, 0);

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
(0, 159753, 'Actress'),
(1, 113, 'Director'),
(2, 123, 'Director'),
(3, 27194, 'Director'),
(4, 72196, 'Director'),
(5, 40976, 'Director'),
(6, 159753, 'Director'),
(7, 113, 'Actress'),
(8, 113, 'Actor'),
(9, 123, 'Music Composer'),
(10, 113, 'Music Composer');

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
  `Poster` varchar(255) NOT NULL,
  `Summary` varchar(10000) NOT NULL,
  `Director` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `movie`
--

INSERT INTO `movie` (`MID`, `Title`, `Year`, `Poster`, `Summary`, `Director`) VALUES
(113, 'Mulholland Drive', 2001, 'https://m.media-amazon.com/images/I/51cDXGXoGqL._AC_UF1000,1000_QL80_.jpg', 'A dark-haired woman is left amnesiac after a car crash. She wanders the streets of Los Angeles in a daze before taking refuge in an apartment. There she is discovered by Betty, a wholesome Midwestern blonde who has come to the City of Angels seeking fame as an actress. Together, the two attempt to solve the mystery of Rita\'s true identity. The story is set in a dream-like Los Angeles, spoilt neither by traffic jams nor smog.', 1),
(123, 'Forrest Gump', 1994, 'https://i.ebayimg.com/images/g/y9gAAOSwUQhi-9Nq/s-l1200.jpg', 'Slow-witted Forrest Gump has never thought of himself as disadvantaged, and thanks to his supportive mother, he leads anything but a restricted life. Whether dominating on the gridiron as a college football star, fighting in Vietnam or captaining a shrimp boat, Forrest inspires people with his childlike optimism. But one person Forrest cares about most may be the most difficult to save -- his childhood love, the sweet but troubled Jenny', 2),
(27194, '12 Years a Slave', 2013, 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQUww1TfS08PJVmSN_szD3GKZ19zS-EtfBazbrlJ-ss37vISknD', 'In the years before the Civil War, Solomon Northup (Chiwetel Ejiofor), a free black man from upstate New York, is kidnapped and sold into slavery in the South. Subjected to the cruelty of one malevolent owner (Michael Fassbender), he also finds unexpected kindness from another, as he struggles continually to survive and maintain some of his dignity. Then in the 12th year of the disheartening ordeal, a chance meeting with an abolitionist from Canada changes Solomon\'s life forever.', 3),
(40976, 'Taxi Driver', 1976, 'https://upload.wikimedia.org/wikipedia/en/3/33/Taxi_Driver_%281976_film_poster%29.jpg', 'Suffering from insomnia, disturbed loner Travis Bickle takes a job as a New York City cabbie, haunting the streets nightly, growing increasingly detached from reality as he dreams of cleaning up the filthy city. When Travis meets pretty campaign worker Betsy , he becomes obsessed with the idea of saving the world, first plotting to assassinate a presidential candidate, then directing his attentions toward rescuing 12-year-old prostitute Iris.', 5),
(71011, 'Inland Empire', 2006, 'https://m.media-amazon.com/images/I/41wCJ4lHSXL._AC_UF894,1000_QL80_.jpg', 'Nikki (Laura Dern), an actress, takes on a role in a new film, and because her husband (Peter J. Lucas) is very jealous, her co-star Devon (Justin Theroux) gets a warning not to make any romantic overtures -- especially since the characters they play are having an affair. Both actors learn that the project is a remake of an unfinished film in which the stars were murdered.', 1),
(72196, 'Babel', 2006, 'https://m.media-amazon.com/images/I/51poif023LL._AC_UF894,1000_QL80_.jpg', 'An accident connects four groups of people on three different continents: two young Moroccan goatherds, a vacationing American couple (Brad Pitt, Cate Blanchett), a deaf Japanese teen and her father, and a Mexican nanny who takes her young charges across a border without parental permission.', 4),
(159753, 'The Impossible', 2012, 'https://movieguide.b-cdn.net/wp-content/uploads/2013/01/p9341404_v_v8_aa.jpg', 'In December 2004, close-knit family Maria (Naomi Watts), Henry (Ewan McGregor) and their three sons begin their winter vacation in Thailand. But the day after Christmas, the idyllic holiday turns into an incomprehensible nightmare when a terrifying roar rises from the depths of the sea, followed by a wall of black water that devours everything in its path. Though Maria and her family face their darkest hour, unexpected displays of kindness and courage ameliorate their terror.', 6);

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
(113, 7, 'Rita'),
(113, 8, 'Adam Kesher'),
(123, 80703, 'Forrest Gump'),
(159753, 0, 'Maria');

-- --------------------------------------------------------

--
-- Table structure for table `movie_soundtrack`
--

CREATE TABLE `movie_soundtrack` (
  `MID` int(11) NOT NULL,
  `Title` varchar(30) NOT NULL,
  `ostId` int(11) NOT NULL,
  `CID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `movie_soundtrack`
--

INSERT INTO `movie_soundtrack` (`MID`, `Title`, `ostId`, `CID`) VALUES
(113, 'Mulholland Dr. Theme', 910, 10),
(123, 'I\'m Forrest... Forrest Gump', 52586, 9),
(123, 'Forrest Gump Suite', 86334, 9);

-- --------------------------------------------------------

--
-- Table structure for table `network`
--

CREATE TABLE `network` (
  `UserID` int(11) NOT NULL,
  `Following_UID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `network`
--

INSERT INTO `network` (`UserID`, `Following_UID`) VALUES
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
(113, 113, 1, 'BEST MOVIE EVER!', 1, 5, 3),
(113, 123, 26430, 'Greatest love story ever been told', 1, 5, 27),
(113, 27194, 86844, 'This movie truly deserves the Best Picture at the Academy, it captures the story that needs to be heard and ultimately, it is an instant classic not only about race, but humanity itself. I love the cinematography works in this movie. ', 1, 5, 5),
(113, 40976, 30702, 'An instant classic. Hats down to you, maestro Scorsese and the legendary Robert De Niro for creating this timeless masterpiece.', 1, 4, 24),
(20974, 123, 49416, 'This movie changes my life!', 1, 5, 17),
(20974, 27194, 93990, 'This is hands down one of the best movies of the year!', 1, 5, 0),
(20974, 159753, 11000, 'Quite Impressive~', 1, 4, 0);

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
(2, 113, 'ken', '123', 0, 1),
(18, 20974, 'koudo', '123', 0, 0),
(20, 74215, 'cool ', '123', 1, 0),
(22, 82275, 'hello', 'world', 0, 0);

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
(113, 113),
(20974, 113),
(20974, 123);

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
-- Indexes for table `crew_filmography`
--
ALTER TABLE `crew_filmography`
  ADD PRIMARY KEY (`CID`,`MID`,`Role`);

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
-- Indexes for table `movie_char`
--
ALTER TABLE `movie_char`
  ADD PRIMARY KEY (`MID`,`CID`,`Cname`);

--
-- Indexes for table `movie_soundtrack`
--
ALTER TABLE `movie_soundtrack`
  ADD PRIMARY KEY (`ostId`);

--
-- Indexes for table `network`
--
ALTER TABLE `network`
  ADD PRIMARY KEY (`UserID`,`Following_UID`);

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
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
