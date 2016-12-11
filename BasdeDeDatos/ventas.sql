/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     11/12/2016 16:20:43                          */
/*==============================================================*/


drop table if exists CLIENTE;

drop table if exists PAGO;

drop table if exists PEDIDO;

drop table if exists PEDIDOPRODUCTO;

drop table if exists PRODUCTO;

drop table if exists VENDEDOR;

/*==============================================================*/
/* Table: CLIENTE                                               */
/*==============================================================*/
create table CLIENTE
(
   CEDULACLIENTE        char(10) not null,
   NOMBRECLIENTE        varchar(50) not null,
   DIRECCIONCLIENTE     varchar(100),
   TELEFONOCLIENTE      varchar(10),
   PASSWORD             varchar(100) not null,
   primary key (CEDULACLIENTE)
);

/*==============================================================*/
/* Table: PAGO                                                  */
/*==============================================================*/
create table PAGO
(
   IDPAGO               int not null,
   IDPEDIDO             int not null,
   DESCRIPCIONPAGO      varchar(50) not null,
   primary key (IDPAGO)
);

/*==============================================================*/
/* Table: PEDIDO                                                */
/*==============================================================*/
create table PEDIDO
(
   IDPEDIDO             int not null,
   CEDULACLIENTE        char(10),
   FECHAPEDIDO          date not null,
   TOTALPEDIDO          float(8,2) not null,
   primary key (IDPEDIDO)
);

/*==============================================================*/
/* Table: PEDIDOPRODUCTO                                        */
/*==============================================================*/
create table PEDIDOPRODUCTO
(
   IDPRODUCTO           int not null,
   IDPEDIDO             int not null,
   primary key (IDPRODUCTO, IDPEDIDO)
);

/*==============================================================*/
/* Table: PRODUCTO                                              */
/*==============================================================*/
create table PRODUCTO
(
   IDPRODUCTO           int not null,
   DESCRIPCION          varchar(100) not null,
   CATEGORIA            varchar(50),
   CANTIDAD             int not null,
   PRECIO               float(8,2),
   primary key (IDPRODUCTO)
);

/*==============================================================*/
/* Table: VENDEDOR                                              */
/*==============================================================*/
create table VENDEDOR
(
   CEDULAVENDEDOR       char(10) not null,
   IDPEDIDO             int not null,
   NOMBREVEND           varchar(100) not null,
   TELEFONOVENDEDOR     varchar(10) not null,
   NIVEL                int not null,
   DESCRIPCIONVENDEDOR  varchar(100) not null,
   PASSWORDVENDEDOR     char(10) not null,
   primary key (CEDULAVENDEDOR)
);

alter table PAGO add constraint FK_PAGOPEDIDO foreign key (IDPEDIDO)
      references PEDIDO (IDPEDIDO) on delete restrict on update restrict;

alter table PEDIDO add constraint FK_PEDIDOCLIENTE foreign key (CEDULACLIENTE)
      references CLIENTE (CEDULACLIENTE) on delete restrict on update restrict;

alter table PEDIDOPRODUCTO add constraint FK_PEDIDOPRODUCTO foreign key (IDPRODUCTO)
      references PRODUCTO (IDPRODUCTO) on delete restrict on update restrict;

alter table PEDIDOPRODUCTO add constraint FK_PEDIDOPRODUCTO2 foreign key (IDPEDIDO)
      references PEDIDO (IDPEDIDO) on delete restrict on update restrict;

alter table VENDEDOR add constraint FK_VENDER foreign key (IDPEDIDO)
      references PEDIDO (IDPEDIDO) on delete restrict on update restrict;

