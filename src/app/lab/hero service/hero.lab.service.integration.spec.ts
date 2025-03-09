// describe("3-hero service (http) testing:", () => {
    
//     it("getHeroes function: send request and receive response successfully", () => { })
//     it("updateHero function: send request and receive response successfully", () => { })
// })


import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { HeroServiceForLab } from './hero.lab.service';
import { Hero } from '../../hero';

describe("3-hero service (http) testing:", () => {
    let service: HeroServiceForLab;
    let httptesting: HttpTestingController;

    let mockHeroes: Hero[] = [];

    let Urltest='http://localhost:3000/heroes';

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                provideHttpClient(),
                provideHttpClientTesting(),
                HeroServiceForLab
            ]
        });

        service = TestBed.inject(HeroServiceForLab);
        httptesting= TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httptesting.verify();
    });

    it("getHeroes function: send request and receive response successfully", () => {
        service.getHeroes().subscribe((heroes: any) => {
            expect(heroes).toEqual(mockHeroes);
        });

        const req = httptesting.expectOne(Urltest);
        expect(req.request.method).toBe('GET');
        req.flush(mockHeroes);
    });

    it("updateHero function: send request and receive response successfully", () => {
        const hero: Hero = { id: 1, name: 'SuperMan', strength: 100 };

        service.updateHero(hero).subscribe(response => {
            expect(response).toEqual(hero);
        });

        const req = httptesting.expectOne(Urltest);
        expect(req.request.method).toBe('PUT');
        req.flush(hero);
    });
});