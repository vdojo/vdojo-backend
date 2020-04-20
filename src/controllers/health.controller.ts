import mongoose from "mongoose";
import {CurrentUser, Get, JsonController} from "routing-controllers";

@JsonController()
export default class HealthController {

    @Get("/")
    public async getHealthCheck() {
        // @ts-ignore
        const mongoState = mongoose.STATES[mongoose.connection ? mongoose.connection.readyState : 0];
        return {
            dbState: mongoState,
            health: "ok"
        };
    }
}
