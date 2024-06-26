-- SQL Manager Lite for PostgreSQL 6.3.2.55531
-- ---------------------------------------
-- Hôte             : localhost
-- Base de données  : node_react
-- Version          : PostgreSQL 14.3, compiled by Visual C++ build 1914, 64-bit



CREATE SCHEMA dashboard AUTHORIZATION postgres;
CREATE SCHEMA reactjs AUTHORIZATION postgres;
CREATE SCHEMA first_appli_react AUTHORIZATION postgres;
SET check_function_bodies = false;
--
-- Structure for table tutorials : 
--
SET search_path = public, pg_catalog;
CREATE TABLE public.tutorials (
    id serial NOT NULL,
    title varchar(255),
    description varchar(255),
    publised boolean,
    "createdAt" timestamp with time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT now() NOT NULL
)
WITH (oids = false);
--
-- Structure for table users : 
--
SET search_path = reactjs, pg_catalog;
CREATE TABLE reactjs.users (
    id integer DEFAULT nextval(('reactjs.users_id_seq'::text)::regclass) NOT NULL,
    matricule varchar(20),
    nom varchar(20),
    prenom varchar(20),
    mot_de_passe varchar,
    age integer,
    sexe varchar(20),
    adresse varchar(20),
    email varchar(50),
    commentaire text
)
WITH (oids = false);
ALTER TABLE ONLY reactjs.users ALTER COLUMN id SET STATISTICS 0;
ALTER TABLE ONLY reactjs.users ALTER COLUMN matricule SET STATISTICS 0;
ALTER TABLE ONLY reactjs.users ALTER COLUMN nom SET STATISTICS 0;
ALTER TABLE ONLY reactjs.users ALTER COLUMN prenom SET STATISTICS 0;
ALTER TABLE ONLY reactjs.users ALTER COLUMN mot_de_passe SET STATISTICS 0;
--
-- Definition for sequence users_id_seq : 
--
CREATE SEQUENCE reactjs.users_id_seq
    START WITH 1
    INCREMENT BY 1
    MAXVALUE 2147483647
    NO MINVALUE
    CACHE 1;
--
-- Structure for table menus : 
--
CREATE TABLE reactjs.menus (
    id serial NOT NULL,
    labelle_menu varchar(50),
    icon varchar(50),
    lien varchar(50),
    range integer,
    "sousMenus" text
)
WITH (oids = false);
ALTER TABLE ONLY reactjs.menus ALTER COLUMN labelle_menu SET STATISTICS 0;
ALTER TABLE ONLY reactjs.menus ALTER COLUMN icon SET STATISTICS 0;
ALTER TABLE ONLY reactjs.menus ALTER COLUMN lien SET STATISTICS 0;
--
-- Structure for table menu : 
--
SET search_path = dashboard, pg_catalog;
CREATE TABLE dashboard.menu (
    id_menu serial NOT NULL,
    nom_menu varchar(20),
    route_menu varchar(20),
    rang_menu varchar(20),
    icon_menu varchar(20),
    sous_menu text
)
WITH (oids = false);
ALTER TABLE ONLY dashboard.menu ALTER COLUMN id_menu SET STATISTICS 0;
ALTER TABLE ONLY dashboard.menu ALTER COLUMN nom_menu SET STATISTICS 0;
ALTER TABLE ONLY dashboard.menu ALTER COLUMN route_menu SET STATISTICS 0;
ALTER TABLE ONLY dashboard.menu ALTER COLUMN rang_menu SET STATISTICS 0;
ALTER TABLE ONLY dashboard.menu ALTER COLUMN icon_menu SET STATISTICS 0;
--
-- Structure for table utilisateur : 
--
CREATE TABLE dashboard.utilisateur (
    id_utilisateur serial NOT NULL,
    nom_user varchar(20),
    prenom_user varchar(20),
    matricule varchar(20),
    password_user varchar(20)
)
WITH (oids = false);
ALTER TABLE ONLY dashboard.utilisateur ALTER COLUMN id_utilisateur SET STATISTICS 0;
ALTER TABLE ONLY dashboard.utilisateur ALTER COLUMN nom_user SET STATISTICS 0;
ALTER TABLE ONLY dashboard.utilisateur ALTER COLUMN prenom_user SET STATISTICS 0;
ALTER TABLE ONLY dashboard.utilisateur ALTER COLUMN matricule SET STATISTICS 0;
ALTER TABLE ONLY dashboard.utilisateur ALTER COLUMN password_user SET STATISTICS 0;
--
-- Structure for table users : 
--
SET search_path = first_appli_react, pg_catalog;
CREATE TABLE first_appli_react.users (
    id_user serial NOT NULL,
    nom varchar(20),
    prenom varchar(20),
    matricule varchar(20),
    mot_de_passe varchar(20),
    id_role integer
)
WITH (oids = false);
ALTER TABLE ONLY first_appli_react.users ALTER COLUMN id_user SET STATISTICS 0;
ALTER TABLE ONLY first_appli_react.users ALTER COLUMN nom SET STATISTICS 0;
ALTER TABLE ONLY first_appli_react.users ALTER COLUMN prenom SET STATISTICS 0;
ALTER TABLE ONLY first_appli_react.users ALTER COLUMN matricule SET STATISTICS 0;
ALTER TABLE ONLY first_appli_react.users ALTER COLUMN mot_de_passe SET STATISTICS 0;
ALTER TABLE ONLY first_appli_react.users ALTER COLUMN id_role SET STATISTICS 0;
--
-- Structure for table role : 
--
CREATE TABLE first_appli_react.role (
    id_role serial NOT NULL,
    type_role varchar(20)
)
WITH (oids = false);
ALTER TABLE ONLY first_appli_react.role ALTER COLUMN id_role SET STATISTICS 0;
ALTER TABLE ONLY first_appli_react.role ALTER COLUMN type_role SET STATISTICS 0;
--
-- Structure for table menus : 
--
CREATE TABLE first_appli_react.menus (
    id_menu serial NOT NULL,
    labelle_menu varchar(50),
    route varchar(50),
    icon varchar(50),
    sous_menus text,
    range integer
)
WITH (oids = false);
ALTER TABLE ONLY first_appli_react.menus ALTER COLUMN id_menu SET STATISTICS 0;
ALTER TABLE ONLY first_appli_react.menus ALTER COLUMN labelle_menu SET STATISTICS 0;
ALTER TABLE ONLY first_appli_react.menus ALTER COLUMN route SET STATISTICS 0;
ALTER TABLE ONLY first_appli_react.menus ALTER COLUMN icon SET STATISTICS 0;
ALTER TABLE ONLY first_appli_react.menus ALTER COLUMN sous_menus SET STATISTICS 0;
--
-- Structure for table tickets : 
--
CREATE TABLE first_appli_react.tickets (
    id_ticket serial NOT NULL,
    priorisation integer,
    raison varchar(100),
    commentaire text,
    outil integer,
    status integer,
    matricule varchar(20),
    reparateur varchar(50)
)
WITH (oids = false);
ALTER TABLE ONLY first_appli_react.tickets ALTER COLUMN id_ticket SET STATISTICS 0;
ALTER TABLE ONLY first_appli_react.tickets ALTER COLUMN priorisation SET STATISTICS 0;
ALTER TABLE ONLY first_appli_react.tickets ALTER COLUMN raison SET STATISTICS 0;
ALTER TABLE ONLY first_appli_react.tickets ALTER COLUMN commentaire SET STATISTICS 0;
--
-- Structure for table outils : 
--
CREATE TABLE first_appli_react.outils (
    id_outil serial NOT NULL,
    type_outil varchar(50)
)
WITH (oids = false);
ALTER TABLE ONLY first_appli_react.outils ALTER COLUMN id_outil SET STATISTICS 0;
ALTER TABLE ONLY first_appli_react.outils ALTER COLUMN type_outil SET STATISTICS 0;
--
-- Structure for table priorisations : 
--
CREATE TABLE first_appli_react.priorisations (
    id_priorisation serial NOT NULL,
    type_priorisation varchar(50)
)
WITH (oids = false);
ALTER TABLE ONLY first_appli_react.priorisations ALTER COLUMN id_priorisation SET STATISTICS 0;
ALTER TABLE ONLY first_appli_react.priorisations ALTER COLUMN type_priorisation SET STATISTICS 0;
--
-- Structure for table status : 
--
CREATE TABLE first_appli_react.status (
    id_status serial NOT NULL,
    type_status varchar(50)
)
WITH (oids = false);
ALTER TABLE ONLY first_appli_react.status ALTER COLUMN id_status SET STATISTICS 0;
ALTER TABLE ONLY first_appli_react.status ALTER COLUMN type_status SET STATISTICS 0;
SET search_path = public, pg_catalog;
--
-- Data for table public.tutorials (LIMIT 0,1)
--
INSERT INTO tutorials (id, title, description, publised, "createdAt", "updatedAt")
VALUES (4, 'fgdfgdg', 'dfgdfgdfg', NULL, '2022-05-10 09:17:59.271712+02', '2022-05-10 09:17:59.271712+02');

SET search_path = reactjs, pg_catalog;
--
-- Data for table reactjs.users (LIMIT 0,2)
--
INSERT INTO users (id, matricule, nom, prenom, mot_de_passe, age, sexe, adresse, email, commentaire)
VALUES (12, 'T9000', 'test', 'test', 'test', 25, 'Homme', 'test', 'test', 'test');

INSERT INTO users (id, matricule, nom, prenom, mot_de_passe, age, sexe, adresse, email, commentaire)
VALUES (16, 'T9001', 'Tsiory', 'herilato', NULL, 25, 'Homme', 'test', 'test', 'test');

--
-- Data for table reactjs.menus (LIMIT 0,5)
--
INSERT INTO menus (id, labelle_menu, icon, lien, range, "sousMenus")
VALUES (15, 'Utilisateur', 'bi bi-people', 'utilisateur', 3, NULL);

INSERT INTO menus (id, labelle_menu, icon, lien, range, "sousMenus")
VALUES (13, 'Contact', 'bi bi-clipboard', 'contact', 2, '[{"icon":"bi bi-gear","labelle_menu":"Paramètre","lien":"parametre","range":"1"},{"icon":"bi bi-plus","labelle_menu":"Ajout","lien":"ajout","range":"2"}]');

INSERT INTO menus (id, labelle_menu, icon, lien, range, "sousMenus")
VALUES (24, 'test', 'bi bi-archive-fill', 'test', NULL, NULL);

INSERT INTO menus (id, labelle_menu, icon, lien, range, "sousMenus")
VALUES (25, 'test', 'bi bi-archive-fill', 'test', NULL, NULL);

INSERT INTO menus (id, labelle_menu, icon, lien, range, "sousMenus")
VALUES (26, 'test1', 'bi bi-arrow-down-right-square', 'test2', NULL, NULL);

SET search_path = dashboard, pg_catalog;
--
-- Data for table dashboard.menu (LIMIT 0,3)
--
INSERT INTO menu (id_menu, nom_menu, route_menu, rang_menu, icon_menu, sous_menu)
VALUES (2, 'Accueil', 'accueil', '1', 'fas fa-desktop', '[]');

INSERT INTO menu (id_menu, nom_menu, route_menu, rang_menu, icon_menu, sous_menu)
VALUES (1, 'Menu', 'gestion-menu', '3', 'bi bi-list', NULL);

INSERT INTO menu (id_menu, nom_menu, route_menu, rang_menu, icon_menu, sous_menu)
VALUES (4, 'Utilisateurs', 'users', '2', 'fas fa-users', '[{"nom_sous_menu":"About","route_sous_menu":"about","rang_sous_menu":"1","icon_sous_menu":"bi bi-plus"}]');

--
-- Data for table dashboard.utilisateur (LIMIT 0,1)
--
INSERT INTO utilisateur (id_utilisateur, nom_user, prenom_user, matricule, password_user)
VALUES (1, 'User', 'User', 'T9001', 'test');

SET search_path = first_appli_react, pg_catalog;
--
-- Data for table first_appli_react.users (LIMIT 0,3)
--
INSERT INTO users (id_user, nom, prenom, matricule, mot_de_passe, id_role)
VALUES (42, 'Test', 'Test', 'T1111', '1234', 2);

INSERT INTO users (id_user, nom, prenom, matricule, mot_de_passe, id_role)
VALUES (1, 'Tsiory', 'Herilanto', 'T9000', 'test', 1);

INSERT INTO users (id_user, nom, prenom, matricule, mot_de_passe, id_role)
VALUES (43, 'Rakoto', 'Louis', 'T0000', 'test', 3);

--
-- Data for table first_appli_react.role (LIMIT 0,3)
--
INSERT INTO role (id_role, type_role)
VALUES (1, 'Administrateur');

INSERT INTO role (id_role, type_role)
VALUES (2, 'Manager');

INSERT INTO role (id_role, type_role)
VALUES (3, 'Sample User');

--
-- Data for table first_appli_react.menus (LIMIT 0,2)
--
INSERT INTO menus (id_menu, labelle_menu, route, icon, sous_menus, range)
VALUES (2, 'Home', 'home', 'bi bi-house-fill', NULL, 0);

INSERT INTO menus (id_menu, labelle_menu, route, icon, sous_menus, range)
VALUES (1, 'Ticket', 'ticket', 'bi bi-bookmark', NULL, 1);

--
-- Data for table first_appli_react.tickets (LIMIT 0,3)
--
INSERT INTO tickets (id_ticket, priorisation, raison, commentaire, outil, status, matricule, reparateur)
VALUES (1, 1, 'test', 'test', 1, 1, 'T0000', NULL);

INSERT INTO tickets (id_ticket, priorisation, raison, commentaire, outil, status, matricule, reparateur)
VALUES (2, 3, 'Test', 'Testtttt', 2, 3, 'T0000', 'T9000');

INSERT INTO tickets (id_ticket, priorisation, raison, commentaire, outil, status, matricule, reparateur)
VALUES (3, 2, 'test', 'test', 4, 3, 'T0000', 'T9000');

--
-- Data for table first_appli_react.outils (LIMIT 0,6)
--
INSERT INTO outils (id_outil, type_outil)
VALUES (1, 'Souris');

INSERT INTO outils (id_outil, type_outil)
VALUES (2, 'Clavier');

INSERT INTO outils (id_outil, type_outil)
VALUES (3, 'Ecran');

INSERT INTO outils (id_outil, type_outil)
VALUES (4, 'Unité Central');

INSERT INTO outils (id_outil, type_outil)
VALUES (5, 'Onduleur');

INSERT INTO outils (id_outil, type_outil)
VALUES (6, 'Multiple');

--
-- Data for table first_appli_react.priorisations (LIMIT 0,3)
--
INSERT INTO priorisations (id_priorisation, type_priorisation)
VALUES (1, 'Urgent');

INSERT INTO priorisations (id_priorisation, type_priorisation)
VALUES (2, 'Moin Urgent');

INSERT INTO priorisations (id_priorisation, type_priorisation)
VALUES (3, 'Simple demande');

--
-- Data for table first_appli_react.status (LIMIT 0,3)
--
INSERT INTO status (id_status, type_status)
VALUES (1, 'En cours');

INSERT INTO status (id_status, type_status)
VALUES (2, 'En Attente');

INSERT INTO status (id_status, type_status)
VALUES (3, 'Terminée');

--
-- Definition for index tutorials_pkey : 
--
SET search_path = public, pg_catalog;
ALTER TABLE ONLY tutorials
    ADD CONSTRAINT tutorials_pkey
    PRIMARY KEY (id);
--
-- Definition for index users_pkey : 
--
SET search_path = reactjs, pg_catalog;
ALTER TABLE ONLY users
    ADD CONSTRAINT users_pkey
    PRIMARY KEY (id);
--
-- Definition for index menus_pkey : 
--
ALTER TABLE ONLY menus
    ADD CONSTRAINT menus_pkey
    PRIMARY KEY (id);
--
-- Definition for index menu_pkey : 
--
SET search_path = dashboard, pg_catalog;
ALTER TABLE ONLY menu
    ADD CONSTRAINT menu_pkey
    PRIMARY KEY (id_menu);
--
-- Definition for index utilisateur_pkey : 
--
ALTER TABLE ONLY utilisateur
    ADD CONSTRAINT utilisateur_pkey
    PRIMARY KEY (id_utilisateur);
--
-- Definition for index users_pkey : 
--
SET search_path = first_appli_react, pg_catalog;
ALTER TABLE ONLY users
    ADD CONSTRAINT users_pkey
    PRIMARY KEY (id_user);
--
-- Definition for index tickets_pkey : 
--
ALTER TABLE ONLY tickets
    ADD CONSTRAINT tickets_pkey
    PRIMARY KEY (id_ticket);
--
-- Definition for index outils_pkey : 
--
ALTER TABLE ONLY outils
    ADD CONSTRAINT outils_pkey
    PRIMARY KEY (id_outil);
--
-- Definition for index priorisations_pkey : 
--
ALTER TABLE ONLY priorisations
    ADD CONSTRAINT priorisations_pkey
    PRIMARY KEY (id_priorisation);
--
-- Definition for index status_pkey : 
--
ALTER TABLE ONLY status
    ADD CONSTRAINT status_pkey
    PRIMARY KEY (id_status);
--
-- Data for sequence public.tutorials_id_seq
--
SET search_path = public, pg_catalog;
SELECT pg_catalog.setval('tutorials_id_seq', 4, true);
--
-- Data for sequence reactjs.users_id_seq
--
SET search_path = reactjs, pg_catalog;
SELECT pg_catalog.setval('users_id_seq', 16, true);
--
-- Data for sequence reactjs.menus_id_seq
--
SELECT pg_catalog.setval('menus_id_seq', 26, true);
--
-- Data for sequence dashboard.menu_id_menu_seq
--
SET search_path = dashboard, pg_catalog;
SELECT pg_catalog.setval('menu_id_menu_seq', 4, true);
--
-- Data for sequence dashboard.utilisateur_id_utilisateur_seq
--
SELECT pg_catalog.setval('utilisateur_id_utilisateur_seq', 1, true);
--
-- Data for sequence first_appli_react.users_id_user_seq
--
SET search_path = first_appli_react, pg_catalog;
SELECT pg_catalog.setval('users_id_user_seq', 43, true);
--
-- Data for sequence first_appli_react.role_id_role_seq
--
SELECT pg_catalog.setval('role_id_role_seq', 3, true);
--
-- Data for sequence first_appli_react.menus_id_menu_seq
--
SELECT pg_catalog.setval('menus_id_menu_seq', 11, true);
--
-- Data for sequence first_appli_react.tickets_id_ticket_seq
--
SELECT pg_catalog.setval('tickets_id_ticket_seq', 3, true);
--
-- Data for sequence first_appli_react.outils_id_outil_seq
--
SELECT pg_catalog.setval('outils_id_outil_seq', 6, true);
--
-- Data for sequence first_appli_react.priorisations_id_priorisation_seq
--
SELECT pg_catalog.setval('priorisations_id_priorisation_seq', 3, true);
--
-- Data for sequence first_appli_react.status_id_status_seq
--
SELECT pg_catalog.setval('status_id_status_seq', 3, true);
--
-- Comments
--
COMMENT ON SCHEMA public IS 'standard public schema';
