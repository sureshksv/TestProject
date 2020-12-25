public class ApexRest2CalloutPublic {
    
    public static decimal convertEurToINR(Decimal eur)
    {
        //https://api.exchangeratesapi.io/latest -->Used this...this is public site ...no login needed
        Decimal eurToInrTotal = 0;
        
        Http http = new Http();
		HttpRequest request = new HttpRequest();
		request.setEndpoint('https://api.exchangeratesapi.io/latest');
		request.setMethod('GET');
		HttpResponse response = http.send(request);
		// If the request is successful, parse the JSON response.
		if (response.getStatusCode() == 200) {
    	// Deserialize the JSON string into collections of primitive data types.
    	Map<String, Object> result = (Map<String, Object>) JSON.deserializeUntyped(response.getBody());
         /*
    	{"rates":{"CAD":1.5528,"HKD":9.1608,"ISK":161.9,"PHP":56.954,"DKK":7.4468,"HUF":355.71,"CZK":26.461,"AUD":1.63,"RON":4.8698,"SEK":10.2537,"IDR":16741.86,"INR":88.186,"BRL":6.4508,"RUB":91.6113,"HRK":7.572,"JPY":123.88,"THB":35.646,"CHF":1.0805,"SGD":1.5934,"PLN":4.4888,"BGN":1.9558,"TRY":9.1303,"CNY":7.8071,"NOK":10.8123,"NZD":1.7304,"ZAR":18.4068,"USD":1.1815,"MXN":24.2239,"ILS":3.979,"GBP":0.89683,"KRW":1311.84,"MYR":4.8707},
          "base":"EUR",
          "date":"2020-11-13"
        }
		*/
    	System.debug('Result='+result);
        //there is rates key with map of (countryCurrncy as key and conversion as value)
   		Map<String, Object> rates = (Map<String, Object>)result.get('rates');
        System.debug('Rates='+rates);
        Decimal eurToInRBaseRate = (Decimal)rates.get('INR');
        System.debug('eurToInRBaseRate='+eurToInRBaseRate);
        eurToInrTotal = eurToInRBaseRate*eur;
		}
        
        return eurToInrTotal;
        
    }

}