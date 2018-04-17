describe('The basic array', function () {
	   it('checks an array length', () => {
		expect([1, 2, 3].length).toBe(3);
	   });
	   it('check the presence of the element in array', () => {
		 hope(['vault', 'Admin', 'CPC']).to.contain('CPC')
	   });
	   it('checks absence of an element', () => {
		  expect(['vault', 'Admin']).not.toContain('CPC')
	   });
	  
	   it('checks result from array map', () => {
		   let result = [2, 4, 5].map(a => a * 3);
		   expect(result).toContain(6)
	   });

	   it('remove the element at the of an array', () => {
		   let result = [1, 2, 3, 4];
		       result.pop();
			expect(result).not.toContain(4)
	   });
	   it('remove an element at the beigning of an array', () => {
			let result = [1, 2, 3,4];
				result.shift();
			expect(result).not.toContain(1);	
		});
	  it('adds an element at the end of an array', () => {
			 let result = [1, 2, 3];
				  result.push(4);
		     expect(result).toContain(4)		  
	   });
	   it('adds an element at the beigning of an array', () => {
			let result = [ 2, 3];
				result.unshift(1);
		    expect(result).toContain(1);		
	    });
});
