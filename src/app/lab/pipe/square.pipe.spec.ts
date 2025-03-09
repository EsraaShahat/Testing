// describe("1-square pipe (class only) testing:",()=>{

import { SquarePipeForLab } from "./square.pipe"

//     it("expect to return 16 when passing 4",()=>{})
//     it("expect to return 9 when passing '3'",()=>{})
//     it("expect to return 'Not a number' when passing wrong parameter",()=>{})
// })

describe("Square Pipe",()=>{
    let pipeSquare:SquarePipeForLab
    beforeEach(()=>{
        pipeSquare =new SquarePipeForLab()
    })
    it("Should return 16 when passing 4",()=>{
      expect(pipeSquare.transform(4)).toBe(16)
    })

    it("Should return 9 when passing 3",()=>{
        expect(pipeSquare.transform('3')).toBe(9)
      })
    it("should return not a number when passing wrong parameter",()=>{
        expect(pipeSquare.transform("Ali")).toBe("not a number")
    })  
})