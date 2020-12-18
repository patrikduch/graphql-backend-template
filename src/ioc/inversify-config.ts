import "reflect-metadata";
import { Container } from "inversify";
import { TYPES } from "./types";

/* Services */
import IUnitOfWork from "../typescript/interfaces/uow/IUnitOfWork";
import UnitOfWork from "../uow/UnitOfWork";


const container = new Container();

/* Generic bindings */
container.bind<IUnitOfWork>(TYPES.IUnitOfWork).to(UnitOfWork).inRequestScope();


export default container;
