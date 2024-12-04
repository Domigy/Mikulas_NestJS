import { Material } from "@prisma/client";
import { IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateToyDto {
    @IsNotEmpty()
    @IsString()
    name: string;
    @IsNotEmpty()
    @IsEnum(Material)
    material: Material;
    @IsNotEmpty()
    @IsNumber()
    weight: number;

}
