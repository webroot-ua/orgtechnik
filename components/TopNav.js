const TopNav = (props) => {
  return (
    <>
      <div className="p-3 p-md-5 m-md-3 top1 shadow">
      <div className='container d-flex justify-content-center'>
        <div className='col-md-4 d-none d-lg-block'>
            <img className="float-left hpCopier" src="hp-copier.png" />
        </div>
          <div className="col-md-8">
            <h1 className="h2 pt-4 titleText">ЗАПРАВКА И РЕМОНТ МОНОХРОМНЫХ КАРТРИДЖЕЙ</h1>
            <div className="d-flex justify-content-center flex-wrap mt-5">
              <a href="/brands/4" className="brandlogoLink">
                <img className="brandlogo shadow" src="hp.png" width="150px" height="150px" />
              </a>
              <a href="/brands/2" className="brandlogoLink">
                <img className="brandlogo shadow" src="canon.png" width="150px" height="150px" />
              </a>
              <a href="/brands/1" className="brandlogoLink">
                <img className="brandlogo shadow" src="brother.png" width="150px" height="150px" />
              </a>
              <a href="/brands/8" className="brandlogoLink">
                <img className="brandlogo shadow" src="samsung.png" width="150px" height="150px" />
              </a>
              <a href="/brands/10" className="brandlogoLink">
                <img className="brandlogo shadow" src="xerox.png" width="150px" height="150px" />
              </a>
            </div>
          </div>
        </div>
    </div>

    <div className="p-3 pt-md-5 pb-md-4 mx-auto center">
		  <h3 className="h2 titleText">HP PAGEWIDE BUSINESS PRINTERS<br />GET LOW COST, FAST SPEEDS, PLUS WORLD'S MOST SECURE4 PRINTING<br />AND BEST-IN-CLASS ENERGY EFFICIENCY2, WITH THE HP PAGEWIDE PRINTERS.</h3>
		</div>

    <div className="p-3 p-md-5 m-md-3 top2 shadow">
    <div className='container d-flex justify-content-center'>
      
	  	{/* <img className="float-right img-fluid" width="400px" height="auto" src="hp-copier.png" /> */}
      <div className="col-md-8">
	  <div className="mx-auto">
	    <h2 className="h2 pt-4 titleText">ЗАПРАВКА И РЕМОНТ ЦВЕТНЫХ КАРТРИДЖЕЙ</h2>
	    <div className="d-flex justify-content-center flex-wrap mt-5">
	    	<a href="/brands/41" className="brandlogoLink">
	    		<img className="brandlogo2 shadow" width="150px" height="150px" src="hp.png" />
	    	</a>
	    	<a href="/brands/21" className="brandlogoLink">
	    		<img className="brandlogo2 shadow" width="150px" height="150px" src="canon.png" />
	    	</a>
	    	<a href="" className="brandlogoLink">
	    		<img className="brandlogo2 shadow" width="150px" height="150px" src="brother.png" />
	    	</a>
	    </div>
	  </div>
    </div>
    <div className='col-md-4 d-none d-lg-block'>
            <img className="float-right hpCopier" src="hp-color.png" />
        </div>
	</div>
  </div>
    </>
  )
}

export default TopNav
