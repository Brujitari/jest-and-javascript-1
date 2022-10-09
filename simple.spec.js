it('should enable the feature', () => {
    const featureEnabled = false;
    expect(featureEnabled).toBe(false);
});

function add(a,b) {
    return a+b
}

it('should ', () => {
    //Arrange
    const expectedResult = 10;
    //Act
    const result = add(2,8);
    //Assert
    expect(result).toBe(expectedResult);
});