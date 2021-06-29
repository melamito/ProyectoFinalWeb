-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-06-2021 a las 06:03:00
-- Versión del servidor: 10.4.18-MariaDB
-- Versión de PHP: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `crown_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carrito`
--

CREATE TABLE `carrito` (
  `id_carrito` int(11) NOT NULL,
  `precio_total` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comunas`
--

CREATE TABLE `comunas` (
  `id` int(11) NOT NULL,
  `comuna` varchar(64) NOT NULL,
  `provincia_id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `comunas`
--

INSERT INTO `comunas` (`id`, `comuna`, `provincia_id`) VALUES
(1, 'Arica', 1),
(2, 'Camarones', 1),
(3, 'General Lagos', 2),
(4, 'Putre', 2),
(5, 'Alto Hospicio', 3),
(6, 'Iquique', 3),
(7, 'Camiña', 4),
(8, 'Colchane', 4),
(9, 'Huara', 4),
(10, 'Pica', 4),
(11, 'Pozo Almonte', 4),
(12, 'Tocopilla', 5),
(13, 'María Elena', 5),
(14, 'Calama', 6),
(15, 'Ollague', 6),
(16, 'San Pedro de Atacama', 6),
(17, 'Antofagasta', 7),
(18, 'Mejillones', 7),
(19, 'Sierra Gorda', 7),
(20, 'Taltal', 7),
(21, 'Chañaral', 8),
(22, 'Diego de Almagro', 8),
(23, 'Copiapó', 9),
(24, 'Caldera', 9),
(25, 'Tierra Amarilla', 9),
(26, 'Vallenar', 10),
(27, 'Alto del Carmen', 10),
(28, 'Freirina', 10),
(29, 'Huasco', 10),
(30, 'La Serena', 11),
(31, 'Coquimbo', 11),
(32, 'Andacollo', 11),
(33, 'La Higuera', 11),
(34, 'Paihuano', 11),
(35, 'Vicuña', 11),
(36, 'Ovalle', 12),
(37, 'Combarbalá', 12),
(38, 'Monte Patria', 12),
(39, 'Punitaqui', 12),
(40, 'Río Hurtado', 12),
(41, 'Illapel', 13),
(42, 'Canela', 13),
(43, 'Los Vilos', 13),
(44, 'Salamanca', 13),
(45, 'La Ligua', 14),
(46, 'Cabildo', 14),
(47, 'Zapallar', 14),
(48, 'Papudo', 14),
(49, 'Petorca', 14),
(50, 'Los Andes', 15),
(51, 'San Esteban', 15),
(52, 'Calle Larga', 15),
(53, 'Rinconada', 15),
(54, 'San Felipe', 16),
(55, 'Llaillay', 16),
(56, 'Putaendo', 16),
(57, 'Santa María', 16),
(58, 'Catemu', 16),
(59, 'Panquehue', 16),
(60, 'Quillota', 17),
(61, 'La Cruz', 17),
(62, 'La Calera', 17),
(63, 'Nogales', 17),
(64, 'Hijuelas', 17),
(65, 'Valparaíso', 18),
(66, 'Viña del Mar', 18),
(67, 'Concón', 18),
(68, 'Quintero', 18),
(69, 'Puchuncaví', 18),
(70, 'Casablanca', 18),
(71, 'Juan Fernández', 18),
(72, 'San Antonio', 19),
(73, 'Cartagena', 19),
(74, 'El Tabo', 19),
(75, 'El Quisco', 19),
(76, 'Algarrobo', 19),
(77, 'Santo Domingo', 19),
(78, 'Isla de Pascua', 20),
(79, 'Quilpué', 21),
(80, 'Limache', 21),
(81, 'Olmué', 21),
(82, 'Villa Alemana', 21),
(83, 'Colina', 22),
(84, 'Lampa', 22),
(85, 'Tiltil', 22),
(86, 'Santiago', 23),
(87, 'Vitacura', 23),
(88, 'San Ramón', 23),
(89, 'San Miguel', 23),
(90, 'San Joaquín', 23),
(91, 'Renca', 23),
(92, 'Recoleta', 23),
(93, 'Quinta Normal', 23),
(94, 'Quilicura', 23),
(95, 'Pudahuel', 23),
(96, 'Providencia', 23),
(97, 'Peñalolén', 23),
(98, 'Pedro Aguirre Cerda', 23),
(99, 'Ñuñoa', 23),
(100, 'Maipú', 23),
(101, 'Macul', 23),
(102, 'Lo Prado', 23),
(103, 'Lo Espejo', 23),
(104, 'Lo Barnechea', 23),
(105, 'Las Condes', 23),
(106, 'La Reina', 23),
(107, 'La Pintana', 23),
(108, 'La Granja', 23),
(109, 'La Florida', 23),
(110, 'La Cisterna', 23),
(111, 'Independencia', 23),
(112, 'Huechuraba', 23),
(113, 'Estación Central', 23),
(114, 'El Bosque', 23),
(115, 'Conchalí', 23),
(116, 'Cerro Navia', 23),
(117, 'Cerrillos', 23),
(118, 'Puente Alto', 24),
(119, 'San José de Maipo', 24),
(120, 'Pirque', 24),
(121, 'San Bernardo', 25),
(122, 'Buin', 25),
(123, 'Paine', 25),
(124, 'Calera de Tango', 25),
(125, 'Melipilla', 26),
(126, 'Alhué', 26),
(127, 'Curacaví', 26),
(128, 'María Pinto', 26),
(129, 'San Pedro', 26),
(130, 'Isla de Maipo', 27),
(131, 'El Monte', 27),
(132, 'Padre Hurtado', 27),
(133, 'Peñaflor', 27),
(134, 'Talagante', 27),
(135, 'Codegua', 28),
(136, 'Coínco', 28),
(137, 'Coltauco', 28),
(138, 'Doñihue', 28),
(139, 'Graneros', 28),
(140, 'Las Cabras', 28),
(141, 'Machalí', 28),
(142, 'Malloa', 28),
(143, 'Mostazal', 28),
(144, 'Olivar', 28),
(145, 'Peumo', 28),
(146, 'Pichidegua', 28),
(147, 'Quinta de Tilcoco', 28),
(148, 'Rancagua', 28),
(149, 'Rengo', 28),
(150, 'Requínoa', 28),
(151, 'San Vicente de Tagua Tagua', 28),
(152, 'Chépica', 29),
(153, 'Chimbarongo', 29),
(154, 'Lolol', 29),
(155, 'Nancagua', 29),
(156, 'Palmilla', 29),
(157, 'Peralillo', 29),
(158, 'Placilla', 29),
(159, 'Pumanque', 29),
(160, 'San Fernando', 29),
(161, 'Santa Cruz', 29),
(162, 'La Estrella', 30),
(163, 'Litueche', 30),
(164, 'Marchigüe', 30),
(165, 'Navidad', 30),
(166, 'Paredones', 30),
(167, 'Pichilemu', 30),
(168, 'Curicó', 31),
(169, 'Hualañé', 31),
(170, 'Licantén', 31),
(171, 'Molina', 31),
(172, 'Rauco', 31),
(173, 'Romeral', 31),
(174, 'Sagrada Familia', 31),
(175, 'Teno', 31),
(176, 'Vichuquén', 31),
(177, 'Talca', 32),
(178, 'San Clemente', 32),
(179, 'Pelarco', 32),
(180, 'Pencahue', 32),
(181, 'Maule', 32),
(182, 'San Rafael', 32),
(183, 'Curepto', 33),
(184, 'Constitución', 32),
(185, 'Empedrado', 32),
(186, 'Río Claro', 32),
(187, 'Linares', 33),
(188, 'San Javier', 33),
(189, 'Parral', 33),
(190, 'Villa Alegre', 33),
(191, 'Longaví', 33),
(192, 'Colbún', 33),
(193, 'Retiro', 33),
(194, 'Yerbas Buenas', 33),
(195, 'Cauquenes', 34),
(196, 'Chanco', 34),
(197, 'Pelluhue', 34),
(198, 'Bulnes', 35),
(199, 'Chillán', 35),
(200, 'Chillán Viejo', 35),
(201, 'El Carmen', 35),
(202, 'Pemuco', 35),
(203, 'Pinto', 35),
(204, 'Quillón', 35),
(205, 'San Ignacio', 35),
(206, 'Yungay', 35),
(207, 'Cobquecura', 36),
(208, 'Coelemu', 36),
(209, 'Ninhue', 36),
(210, 'Portezuelo', 36),
(211, 'Quirihue', 36),
(212, 'Ránquil', 36),
(213, 'Treguaco', 36),
(214, 'San Carlos', 37),
(215, 'Coihueco', 37),
(216, 'San Nicolás', 37),
(217, 'Ñiquén', 37),
(218, 'San Fabián', 37),
(219, 'Alto Biobío', 38),
(220, 'Antuco', 38),
(221, 'Cabrero', 38),
(222, 'Laja', 38),
(223, 'Los Ángeles', 38),
(224, 'Mulchén', 38),
(225, 'Nacimiento', 38),
(226, 'Negrete', 38),
(227, 'Quilaco', 38),
(228, 'Quilleco', 38),
(229, 'San Rosendo', 38),
(230, 'Santa Bárbara', 38),
(231, 'Tucapel', 38),
(232, 'Yumbel', 38),
(233, 'Concepción', 39),
(234, 'Coronel', 39),
(235, 'Chiguayante', 39),
(236, 'Florida', 39),
(237, 'Hualpén', 39),
(238, 'Hualqui', 39),
(239, 'Lota', 39),
(240, 'Penco', 39),
(241, 'San Pedro de La Paz', 39),
(242, 'Santa Juana', 39),
(243, 'Talcahuano', 39),
(244, 'Tomé', 39),
(245, 'Arauco', 40),
(246, 'Cañete', 40),
(247, 'Contulmo', 40),
(248, 'Curanilahue', 40),
(249, 'Lebu', 40),
(250, 'Los Álamos', 40),
(251, 'Tirúa', 40),
(252, 'Angol', 41),
(253, 'Collipulli', 41),
(254, 'Curacautín', 41),
(255, 'Ercilla', 41),
(256, 'Lonquimay', 41),
(257, 'Los Sauces', 41),
(258, 'Lumaco', 41),
(259, 'Purén', 41),
(260, 'Renaico', 41),
(261, 'Traiguén', 41),
(262, 'Victoria', 41),
(263, 'Temuco', 42),
(264, 'Carahue', 42),
(265, 'Cholchol', 42),
(266, 'Cunco', 42),
(267, 'Curarrehue', 42),
(268, 'Freire', 42),
(269, 'Galvarino', 42),
(270, 'Gorbea', 42),
(271, 'Lautaro', 42),
(272, 'Loncoche', 42),
(273, 'Melipeuco', 42),
(274, 'Nueva Imperial', 42),
(275, 'Padre Las Casas', 42),
(276, 'Perquenco', 42),
(277, 'Pitrufquén', 42),
(278, 'Pucón', 42),
(279, 'Saavedra', 42),
(280, 'Teodoro Schmidt', 42),
(281, 'Toltén', 42),
(282, 'Vilcún', 42),
(283, 'Villarrica', 42),
(284, 'Valdivia', 43),
(285, 'Corral', 43),
(286, 'Lanco', 43),
(287, 'Los Lagos', 43),
(288, 'Máfil', 43),
(289, 'Mariquina', 43),
(290, 'Paillaco', 43),
(291, 'Panguipulli', 43),
(292, 'La Unión', 44),
(293, 'Futrono', 44),
(294, 'Lago Ranco', 44),
(295, 'Río Bueno', 44),
(297, 'Osorno', 45),
(298, 'Puerto Octay', 45),
(299, 'Purranque', 45),
(300, 'Puyehue', 45),
(301, 'Río Negro', 45),
(302, 'San Juan de la Costa', 45),
(303, 'San Pablo', 45),
(304, 'Calbuco', 46),
(305, 'Cochamó', 46),
(306, 'Fresia', 46),
(307, 'Frutillar', 46),
(308, 'Llanquihue', 46),
(309, 'Los Muermos', 46),
(310, 'Maullín', 46),
(311, 'Puerto Montt', 46),
(312, 'Puerto Varas', 46),
(313, 'Ancud', 47),
(314, 'Castro', 47),
(315, 'Chonchi', 47),
(316, 'Curaco de Vélez', 47),
(317, 'Dalcahue', 47),
(318, 'Puqueldón', 47),
(319, 'Queilén', 47),
(320, 'Quellón', 47),
(321, 'Quemchi', 47),
(322, 'Quinchao', 47),
(323, 'Chaitén', 48),
(324, 'Futaleufú', 48),
(325, 'Hualaihué', 48),
(326, 'Palena', 48),
(327, 'Lago Verde', 49),
(328, 'Coihaique', 49),
(329, 'Aysén', 50),
(330, 'Cisnes', 50),
(331, 'Guaitecas', 50),
(332, 'Río Ibáñez', 51),
(333, 'Chile Chico', 51),
(334, 'Cochrane', 52),
(335, 'O\'Higgins', 52),
(336, 'Tortel', 52),
(337, 'Natales', 53),
(338, 'Torres del Paine', 53),
(339, 'Laguna Blanca', 54),
(340, 'Punta Arenas', 54),
(341, 'Río Verde', 54),
(342, 'San Gregorio', 54),
(343, 'Porvenir', 55),
(344, 'Primavera', 55),
(345, 'Timaukel', 55),
(346, 'Cabo de Hornos', 56),
(347, 'Antártica', 56);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `precio` int(11) NOT NULL,
  `imagen` varchar(100) NOT NULL,
  `sexo` int(11) NOT NULL,
  `categoria` int(11) NOT NULL,
  `puntuacion` int(11) NOT NULL,
  `oferta` int(11) NOT NULL,
  `Comentarios` varchar(500) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `cantidad`, `precio`, `imagen`, `sexo`, `categoria`, `puntuacion`, `oferta`, `Comentarios`) VALUES
(1, 'Sweater Cable Mock', 5, 108000, '../../assets/productos/1.png', 1, 12, 3, 0, ''),
(2, 'Camisa Oxford Logo', 3, 48000, '../../assets/productos/2.png', 2, 11, 2, 0, ''),
(3, 'Pantalon Ryan Glenplaid', 6, 88000, '../../assets/productos/3.png', 1, 13, 5, 80000, ''),
(4, 'Polera Lace Jr. Bebé Uva', 0, 19990, '../../assets/productos/4.png', 3, 11, 2, 0, ''),
(5, 'Bota Comfy Recién Nacida Beige', 6, 11990, '../../assets/productos/5.png', 3, 14, 1, 0, ''),
(6, 'Pantalon Hombre Slim Non Iron Stretch', 2, 84000, '../../assets/productos/6.png', 2, 13, 3, 63000, ''),
(7, 'Polera Mujer Sandwash', 14, 44000, '../../assets/productos/7.png', 1, 11, 3, 0, ''),
(8, 'Botín piel negro Bimba y lola', 5, 20400, '../../assets/productos/8.png', 1, 14, 5, 16320, ''),
(9, 'Sweater Hombre Merino Crew', 3, 78000, '../../assets/productos/9.png', 2, 12, 4, 58500, ''),
(10, 'Polera Gris Hombre', 14, 15000, '../../assets/productos/10.png', 2, 11, 1, 0, ''),
(11, 'Pantalón Jeans Hombre', 4, 32000, '../../assets/productos/11.png', 2, 13, 3, 28000, ''),
(12, 'Zapato Formal Hombre', 10, 45000, '../../assets/productos/12.png', 2, 14, 5, 0, ''),
(13, 'Poleron Mostaza Hombre', 5, 48990, '../../assets/productos/13.png', 2, 12, 1, 0, ''),
(14, 'Pantalón Casual Hombre', 2, 30000, '../../assets/productos/14.png', 2, 13, 4, 0, ''),
(15, 'Zapato Semiformal Hombre', 6, 64000, '../../assets/productos/15.png', 2, 14, 3, 59990, ''),
(16, 'Zapato Negro Mujer Tacón Bajo', 1, 44590, '../../assets/productos/16.png', 1, 14, 4, 0, ''),
(17, 'Pantalón Ajustado Negro Mujer', 4, 35890, '../../assets/productos/17.png', 1, 13, 2, 0, ''),
(18, 'Polera Animal Mujer', 1, 25990, '../../assets/productos/18.png', 1, 11, 2, 21000, ''),
(19, 'Pantalón Corto Amarillo Mujer', 10, 26990, '../../assets/productos/19.png', 1, 13, 4, 0, ''),
(20, 'Zapato Semiformal Mujer', 0, 68990, '../../assets/productos/20.png', 1, 14, 4, 0, ''),
(21, 'Polerón Colorido Hombre', 20, 36990, '../../assets/productos/21.png', 2, 12, 1, 0, ''),
(22, 'Polerón The Simpson Hombre', 4, 28990, '../../assets/productos/22.png', 2, 12, 5, 0, ''),
(23, 'Polera Básica Hombre', 10, 15990, '../../assets/productos/23.png', 2, 11, 1, 0, ''),
(24, 'Pantalón Negro Hombre', 0, 34990, '../../assets/productos/24.png', 2, 13, 4, 0, ''),
(25, 'Zapato Casual Hombre', 15, 49990, '../../assets/productos/25.png', 2, 14, 5, 0, ''),
(26, 'Polerón Blanco/Rosado Mujer', 9, 29990, '../../assets/productos/26.png', 1, 12, 2, 0, ''),
(27, 'Polerón Coqueto Playboy Mujer', 19, 31990, '../../assets/productos/27.png', 1, 13, 4, 0, ''),
(28, 'Polera Básica Hombre Azul', 0, 26990, '../../assets/productos/28.png', 2, 11, 2, 0, ''),
(29, 'Zapato Cómodo Mujer', 8, 44990, '../../assets/productos/29.png', 1, 14, 5, 0, ''),
(30, 'Polerón Casual Mujer Rosado', 6, 38990, '../../assets/productos/30.png', 1, 12, 4, 29990, ''),
(31, 'Pantalón Rojo Mujer', 16, 39990, '../../assets/productos/31.png', 1, 13, 3, 29990, ''),
(32, 'Zapato Tipo Botines Mujer', 1, 88990, '../../assets/productos/32.png', 1, 14, 5, 0, ''),
(33, 'Zapato Casual Mujer', 10, 31990, '../../assets/productos/33.png', 1, 14, 2, 0, ''),
(34, 'Zapatos Cómodos Hombre', 4, 58990, '../../assets/productos/34.png', 2, 14, 5, 0, ''),
(35, 'Polera Cuadros Niñe', 12, 28990, '../../assets/productos/35.png', 3, 11, 4, 0, ''),
(36, 'Polera Casual Gris Hombre', 3, 24990, '../../assets/productos/36.png', 2, 11, 1, 0, ''),
(37, 'Pantalón Cómodo Hombre', 0, 48990, '../../assets/productos/37.png', 2, 13, 5, 0, ''),
(38, 'Polerón Casual Mujer Negro', 16, 23990, '../../assets/productos/38.png', 1, 12, 4, 0, ''),
(39, 'Zapato Formal Hombre', 2, 92990, '../../assets/productos/39.png', 2, 14, 5, 0, ''),
(40, 'Polerón Deportivo Hombre', 14, 40000, '../../assets/productos/40.png', 2, 12, 2, 34990, ''),
(41, 'Pantalón Deportivo Hombre', 2, 38990, '../../assets/productos/41.png', 2, 13, 3, 0, ''),
(42, 'Polera Rayas Niñe', 19, 30990, '../../assets/productos/42.png', 3, 11, 5, 0, ''),
(43, 'Polera Manga Larga Mujer', 7, 29990, '../../assets/productos/43.png', 1, 11, 1, 0, ''),
(44, 'Polera Corazón Mujer', 11, 23990, '../../assets/productos/44.png', 1, 11, 3, 0, ''),
(45, 'Polera Iron Man Niñe', 2, 29990, '../../assets/productos/45.png', 3, 11, 4, 0, ''),
(46, 'Polera León Niñe', 23, 24990, '../../assets/productos/46.png', 3, 11, 3, 0, ''),
(47, 'Polera Smile Niñe', 4, 18990, '../../assets/productos/47.png', 3, 11, 3, 0, ''),
(48, 'Zapatos Tacón Alto Azul Mujer', 6, 58990, '../../assets/productos/48.png', 1, 14, 5, 0, ''),
(49, 'Zapatos Semiformal Mujer', 10, 62990, '../../assets/productos/49.png', 1, 14, 4, 0, ''),
(50, 'Polerón Largo Mujer', 0, 58990, '../../assets/productos/50.png', 1, 12, 3, 0, ''),
(51, 'Polera Corta Niñe', 16, 30990, '../../assets/productos/51.png', 3, 11, 4, 0, ''),
(52, 'Polera Rosa Niñe', 10, 28990, '../../assets/productos/52.png', 3, 11, 3, 0, ''),
(53, 'Zapato Casual Rojo Hombre', 13, 50990, '../../assets/productos/53.png', 2, 14, 5, 0, ''),
(54, 'Pantalón Rojo Hombre', 3, 38000, '../../assets/productos/54.png', 2, 13, 4, 0, ''),
(55, 'Pantalón Semiformal Hombre', 6, 32990, '../../assets/productos/55.png', 2, 13, 4, 0, ''),
(56, 'Zapato Lolita Mujer', 14, 78990, '../../assets/productos/56.png', 1, 14, 5, 0, ''),
(57, 'Zapato Cómodo Hombre', 2, 75990, '../../assets/productos/57.png', 2, 14, 4, 0, ''),
(58, 'Polera Unicornio Niñe', 4, 32990, '../../assets/productos/58.png', 3, 11, 3, 0, ''),
(59, 'Zapato Botín Mujer', 0, 40990, '../../assets/productos/59.png', 1, 14, 5, 0, ''),
(60, 'Zapato Formal Mujer', 10, 78990, '../../assets/productos/60.png', 1, 14, 5, 0, ''),
(61, 'Pantalón Retro Hombre', 3, 41990, '../../assets/productos/61.png', 2, 13, 3, 0, ''),
(62, 'Zapato Formal Cuero Hombre', 2, 119990, '../../assets/productos/62.png', 2, 14, 5, 0, ''),
(63, 'Zapato Fiesta Mujer Rojo', 4, 60990, '../../assets/productos/63.png', 1, 14, 4, 0, ''),
(64, 'Zapato Formal Hombre', 0, 80990, '../../assets/productos/64.png', 2, 14, 5, 68990, ''),
(65, 'Polera Niñe Rosa', 10, 20990, '../../assets/productos/65.png', 3, 11, 3, 0, ''),
(66, 'Pantalón Cómodo Niñe', 4, 35990, '../../assets/productos/66.png', 3, 13, 4, 0, ''),
(67, 'Polera Rayas Niñe', 1, 10990, '../../assets/productos/67.png', 3, 11, 4, 0, ''),
(68, 'Polera Colorida Niñe', 20, 20990, '../../assets/productos/68.png', 3, 11, 5, 0, ''),
(69, 'Polerón Rojo Mujer', 2, 41990, '../../assets/productos/69.png', 1, 12, 5, 0, ''),
(70, 'Zapato Botín Mujer', 0, 40990, '../../assets/productos/70.png', 1, 14, 5, 0, ''),
(71, 'Zapato Botín Hombre', 2, 95000, '../../assets/productos/71.png', 2, 14, 5, 0, ''),
(72, 'Polerón Blanco/Rosado Niñe', 2, 29990, '../../assets/productos/72.png', 3, 12, 5, 0, ''),
(73, 'Polerón Niñe', 0, 31990, '../../assets/productos/73.png', 3, 12, 3, 0, ''),
(74, 'Zapato Rosa Niñe', 4, 41990, '../../assets/productos/74.png', 3, 14, 5, 0, ''),
(75, 'Pantalón Deportivo Hombre', 3, 35000, '../../assets/productos/75.png', 2, 14, 3, 0, ''),
(76, 'Polera Cómoda Mujer', 9, 20990, '../../assets/productos/76.png', 1, 11, 4, 0, ''),
(77, 'Polerón Love Hombre', 12, 38900, '../../assets/productos/77.png', 1, 12, 4, 0, ''),
(78, 'Zapato Escolar Niñe', 12, 45990, '../../assets/productos/78.png', 3, 14, 5, 0, ''),
(79, 'Polerón Dinosaurio Niñe', 8, 25000, '../../assets/productos/79.png', 3, 12, 4, 0, ''),
(80, 'Polerón Café Mujer', 3, 55990, '../../assets/productos/80.png', 1, 12, 5, 0, ''),
(81, 'Zapato Botín Niñe', 12, 45000, '../../assets/productos/81.png', 3, 14, 5, 0, ''),
(82, 'Pantalón Corto Deportivo Hombre', 10, 50990, '../../assets/productos/82.png', 2, 13, 5, 0, ''),
(83, 'Pantalón Corto Mujer', 3, 35000, '../../assets/productos/83.png', 1, 12, 4, 0, ''),
(84, 'Polerón Rosa Mujer', 1, 64990, '../../assets/productos/84.png', 1, 12, 5, 0, ''),
(85, 'Zapatos Princesas Niñe', 20, 48900, '../../assets/productos/85.png', 3, 14, 5, 0, ''),
(86, 'Polerón Básico Mujer', 1, 25900, '../../assets/productos/86.png', 1, 12, 4, 0, ''),
(87, 'Polerón Hombre Azul', 19, 45000, '../../assets/productos/87.png', 2, 12, 3, 0, ''),
(88, 'Polera Mujer Rosa', 3, 28900, '../../assets/productos/88.png', 1, 11, 4, 0, ''),
(89, 'Zapato Plateado Niñe', 2, 55900, '../../assets/productos/89.png', 3, 14, 5, 0, ''),
(90, 'Polerón Sin Mangas Mujer', 9, 35000, '../../assets/productos/90.png', 1, 12, 4, 0, ''),
(91, 'Zapato Rojo niñe', 1, 62000, '../../assets/productos/91.png', 3, 14, 5, 0, ''),
(92, 'Polerón TikTok Niñe', 0, 25000, '../../assets/productos/92.png', 3, 12, 4, 0, ''),
(93, 'Pantalón Corto Verde Hombre', 8, 45000, '../../assets/productos/93.png', 2, 13, 4, 0, ''),
(94, 'Pantalón Corto Casual Mujer', 3, 51000, '../../assets/productos/94.png', 1, 13, 5, 45000, ''),
(95, 'Polerón Hombre Azul', 1, 69000, '../../assets/productos/95.png', 2, 12, 4, 0, ''),
(96, 'Polerón Deportivo Mujer', 3, 55900, '../../assets/productos/96.png', 1, 12, 5, 0, ''),
(97, 'Zapato Cómodo Niñe', 3, 40900, '../../assets/productos/97.png', 3, 14, 5, 0, ''),
(98, 'Zapato Abierto Mujer', 1, 55000, '../../assets/productos/98.png', 3, 14, 5, 0, ''),
(99, 'Pantalón Corto Hombre', 12, 44900, '../../assets/productos/99.png', 2, 13, 5, 0, ''),
(100, 'Pantalón Corto Celeste Mujer', 0, 55900, '../../assets/productos/100.png', 1, 13, 5, 0, '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos_carrito`
--

CREATE TABLE `productos_carrito` (
  `id_producto` int(11) NOT NULL,
  `id_carrito` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `provincias`
--

CREATE TABLE `provincias` (
  `id` int(11) NOT NULL,
  `provincia` varchar(64) NOT NULL,
  `region_id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `provincias`
--

INSERT INTO `provincias` (`id`, `provincia`, `region_id`) VALUES
(1, 'Arica', 1),
(2, 'Parinacota', 1),
(3, 'Iquique', 2),
(4, 'El Tamarugal', 2),
(5, 'Tocopilla', 3),
(6, 'El Loa', 3),
(7, 'Antofagasta', 3),
(8, 'Chañaral', 4),
(9, 'Copiapó', 4),
(10, 'Huasco', 4),
(11, 'Elqui', 5),
(12, 'Limarí', 5),
(13, 'Choapa', 5),
(14, 'Petorca', 6),
(15, 'Los Andes', 6),
(16, 'San Felipe de Aconcagua', 6),
(17, 'Quillota', 6),
(18, 'Valparaiso', 6),
(19, 'San Antonio', 6),
(20, 'Isla de Pascua', 6),
(21, 'Marga Marga', 6),
(22, 'Chacabuco', 7),
(23, 'Santiago', 7),
(24, 'Cordillera', 7),
(25, 'Maipo', 7),
(26, 'Melipilla', 7),
(27, 'Talagante', 7),
(28, 'Cachapoal', 8),
(29, 'Colchagua', 8),
(30, 'Cardenal Caro', 8),
(31, 'Curicó', 9),
(32, 'Talca', 9),
(33, 'Linares', 9),
(34, 'Cauquenes', 9),
(35, 'Diguillín', 10),
(36, 'Itata', 10),
(37, 'Punilla', 10),
(38, 'Bio Bío', 11),
(39, 'Concepción', 11),
(40, 'Arauco', 11),
(41, 'Malleco', 12),
(42, 'Cautín', 12),
(43, 'Valdivia', 13),
(44, 'Ranco', 13),
(45, 'Osorno', 14),
(46, 'Llanquihue', 14),
(47, 'Chiloé', 14),
(48, 'Palena', 14),
(49, 'Coyhaique', 15),
(50, 'Aysén', 15),
(51, 'General Carrera', 15),
(52, 'Capitán Prat', 15),
(53, 'Última Esperanza', 16),
(54, 'Magallanes', 16),
(55, 'Tierra del Fuego', 16),
(56, 'Antártica Chilena', 16);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `puntuacion`
--

CREATE TABLE `puntuacion` (
  `id_puntuacion` int(11) NOT NULL,
  `puntaje` int(11) NOT NULL,
  `comentario` varchar(50) NOT NULL,
  `id_producto` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `regiones`
--

CREATE TABLE `regiones` (
  `id` int(11) NOT NULL,
  `region` varchar(64) NOT NULL,
  `abreviatura` varchar(4) NOT NULL,
  `capital` varchar(64) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `regiones`
--

INSERT INTO `regiones` (`id`, `region`, `abreviatura`, `capital`) VALUES
(1, 'Arica y Parinacota', 'AP', 'Arica'),
(2, 'Tarapacá', 'TA', 'Iquique'),
(3, 'Antofagasta', 'AN', 'Antofagasta'),
(4, 'Atacama', 'AT', 'Copiapó'),
(5, 'Coquimbo', 'CO', 'La Serena'),
(6, 'Valparaiso', 'VA', 'valparaíso'),
(7, 'Metropolitana de Santiago', 'RM', 'Santiago'),
(8, 'Libertador General Bernardo O\'Higgins', 'OH', 'Rancagua'),
(9, 'Maule', 'MA', 'Talca'),
(10, 'Ñuble', 'NB', 'Chillán'),
(11, 'Biobío', 'BI', 'Concepción'),
(12, 'La Araucanía', 'IAR', 'Temuco'),
(13, 'Los Ríos', 'LR', 'Valdivia'),
(14, 'Los Lagos', 'LL', 'Puerto Montt'),
(15, 'Aysén del General Carlos Ibáñez del Campo', 'AI', 'Coyhaique'),
(16, 'Magallanes y de la Antártica Chilena', 'MG', 'Punta Arenas');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombres` varchar(50) NOT NULL,
  `apellidos` varchar(50) NOT NULL,
  `rut` varchar(50) NOT NULL,
  `direccion` varchar(50) NOT NULL,
  `region` int(11) NOT NULL,
  `provincia` int(11) NOT NULL,
  `comuna` int(10) NOT NULL,
  `correo` varchar(50) NOT NULL,
  `contraseña` varchar(255) NOT NULL,
  `admi` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombres`, `apellidos`, `rut`, `direccion`, `region`, `provincia`, `comuna`, `correo`, `contraseña`, `admi`) VALUES
(1, 'Admin', 'Admin', '12345678-9', 'calle falsa 123', 7, 23, 101, 'admin@gmail.com', '274c3717a699d42cc89ce080650115a8', 1),
(5, 'Maria gabriela', 'Castro Almendra', '19488487-7', 'los pomelos #828', 6, 17, 60, 'gaby.castro@outlook.com', '985f4dccda9aa346a0aa025ff246c434', 0),
(6, 'Helen anny', 'Silva Cerda', '19357909-4', 'marga marga sin numero', 6, 21, 79, 'helen@gmail.com', 'e69dc2c09e8da6259422d987ccbe95b5', 0),
(7, 'Karina Andrea', 'Rozas Romo', '20004006-6', 'irma salas silva 4488 Macul', 7, 23, 101, 'karina.rozas.romo@hotmail.com', '25b75828d59d5d126e0faa7aab654017', 0),
(8, 'Karina Noemi ', 'Matamala Palta', '20468825-7', 'Hugo españa flores 118 ', 7, 25, 122, 'karinanmp169@gmail.com', 'ce26462e4da3b6504432266af334bc6b', 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD PRIMARY KEY (`id_carrito`),
  ADD KEY `fkidUsuario` (`id_usuario`);

--
-- Indices de la tabla `comunas`
--
ALTER TABLE `comunas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `productos_carrito`
--
ALTER TABLE `productos_carrito`
  ADD PRIMARY KEY (`id_producto`,`id_carrito`),
  ADD KEY `id_carrito` (`id_carrito`);

--
-- Indices de la tabla `provincias`
--
ALTER TABLE `provincias`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `puntuacion`
--
ALTER TABLE `puntuacion`
  ADD PRIMARY KEY (`id_puntuacion`),
  ADD KEY `fkIdProducto` (`id_producto`),
  ADD KEY `fkIdUsuario` (`id_usuario`);

--
-- Indices de la tabla `regiones`
--
ALTER TABLE `regiones`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `comunas`
--
ALTER TABLE `comunas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=348;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;

--
-- AUTO_INCREMENT de la tabla `provincias`
--
ALTER TABLE `provincias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;

--
-- AUTO_INCREMENT de la tabla `puntuacion`
--
ALTER TABLE `puntuacion`
  MODIFY `id_puntuacion` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `regiones`
--
ALTER TABLE `regiones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD CONSTRAINT `id_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `productos_carrito`
--
ALTER TABLE `productos_carrito`
  ADD CONSTRAINT `id_carrito` FOREIGN KEY (`id_carrito`) REFERENCES `carrito` (`id_carrito`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `id_productos` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `puntuacion`
--
ALTER TABLE `puntuacion`
  ADD CONSTRAINT `id_producto` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `puntuacion_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
