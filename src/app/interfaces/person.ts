import { AstronautDetail } from "./astronaut-detail";
import { AstronautDuty } from "./astronaut-duty";

export interface Person {
    id: number;
    name: string;
    astronautDetail?: AstronautDetail;
    astronautDuties?: AstronautDuty[];
}
