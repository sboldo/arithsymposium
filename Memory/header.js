{
		// all this just to factor out the common code.
		header=`
	<!--<h1> IEEE International Symposium on Computer Arithmetic
	  <br>
    <div style="font-size:2em; color:#FF0000;">ARITH</div>-->
    <img src="../img/ARITH_logo.png" alt="ARITH logo">
	</h1>
`;
		let oldelem = document.querySelector("script#replace_with_header");
		let newelem = document.createElement("div");
		newelem.innerHTML = header;
		oldelem.parentNode.replaceChild(newelem,oldelem);
}
