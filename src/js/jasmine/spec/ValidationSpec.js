describe("Validation", function() {

    it("Valid Email Should Be Valid", function() {
        //Arrange
        var emailAddress = "darth.vader@starwars.com"
        
        //Act
        var result = validateEmail(emailAddress)

        //Assert
        expect(result).toEqual(true)
      });

      it("Two @@ Should Be Invalid for an email", function() {
        //Arrange
        var emailAddress = "darth.vader@@starwars.com"
        
        //Act
        var result = validateEmail(emailAddress)

        //Assert
        expect(result).toEqual(false)
      });

      it("No Top Level Domain Should Be Invalid for an email", function() {
        //Arrange
        var emailAddress = "darth.vader@starwars"
        
        //Act
        var result = validateEmail(emailAddress)

        //Assert
        expect(result).toEqual(false)
      });

      it("Invalid Characters Should Be Invalid for an email", function() {
        //Arrange
        var emailAddress = "+darth.vader@starwars"
        
        //Act
        var result = validateEmail(emailAddress)

        //Assert
        expect(result).toEqual(false)
      });

});