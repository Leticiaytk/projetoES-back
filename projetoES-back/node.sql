

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


CREATE TABLE `usuarios` (
  `email` varchar(50) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `senha` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `usuarios` (`email`, `nome`, `senha`) VALUES
('FCT@gmail.com', 'andre', '123'),
('unesp@gmail.com', 'gabriel', '321');

ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`email`);

ALTER TABLE `usuarios`
  MODIFY `email` varchar(50) NOT NULL;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;