import { IsDate, IsDateString, IsEmail, IsNotEmpty,IsString } from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    firstName: string;

    @IsNotEmpty()
    @IsString()
    lastName: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    country: string;

    @IsNotEmpty()
    @IsString()
    state: string;

    @IsNotEmpty()
    @IsString()
    city: string;

    @IsNotEmpty()
    @IsString()
    gender: string;



    @IsString()
    @IsNotEmpty()
    dateOfBirth: any;

    @IsNotEmpty()
    @IsString()
    age: number;
}