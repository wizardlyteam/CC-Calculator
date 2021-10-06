$(function(){
  
    var form = $("#wizard");
    form.validate();
   var  wiz = $("#wizard").steps({
        headerTag: "h4",
        bodyTag: "section",
        transitionEffect: "fade",
        enableAllSteps: true,
        transitionEffectSpeed: 300,
        labels: {
            next: "Next",
            previous: "Back"
        },
        onStepChanging: function (event, currentIndex, newIndex) { 
            $("#wizard").validate({
                debug: false
              });
            console.log(currentIndex, newIndex,form.valid())
            if ( newIndex === 0 ) {
                $('.steps ul').removeClass('step-4');
                $('.steps ul').removeClass('step-3');
                $('.steps ul').removeClass('step-2');
            }
            if ( newIndex === 1 ) {
                
                var project = $("#project").val();
                $('.steps ul').removeClass('step-4');
                $('.steps ul').removeClass('step-3');
                $('.steps ul').removeClass('step-2');
                $('.steps ul').addClass('step-2');
                if(project != ''){
                    return true; 
                }
                
            }
            
            if ( newIndex === 2 ) {
                var D10 = $("#D10").val();
                var D11 = $("#D11").val();
                var D12 = $("#D12").val();
                var D13 = $("#D13").val();
                if(D10 != '' && D11 != '' && D12 != '' && D13 != ''){
                    $('.steps ul').addClass('step-3');
                    $('.steps ul').removeClass('step-4');
                    return true; 
                }
                
            }
            // else {
                
            //     $('.steps ul').removeClass('step-2');
            // }
            if ( newIndex === 3 ) {
                var D16 = $("#D16").val();
                var D17 = $("#D17").val();
                var D18 = $("#D18").val();
                var D19 = $("#D19").val();
                if(D16 != '' && D17 != '' && D18 != '' && D19 != ''){
                    $('.steps ul').addClass('step-4');
                $('.actions ul').addClass('mt-7');
                    return true; 
                }
                
            } 
            if(newIndex < currentIndex){
                
                if(newIndex === 1){
                    $('.steps ul').removeClass('step-2');
                    $('.steps ul').addClass('step-1');
                }else if(newIndex === 2){
                    console.log('2')
                    $('.steps ul').removeClass('step-3');
                    $('.steps ul').addClass('step-2');
                $('.actions ul').removeClass('mt-7');
                }else if(newIndex === 3){
                    $('.steps ul').removeClass('step-4');
                    $('.steps ul').addClass('step-3');
                }else if(newIndex === 4){
                    $('.steps ul').addClass('step-5');
                }
                return true; 
            }
            
        },
        onFinishing: function (event, currentIndex)
        {
            return true;
        },
        onFinished: function (event, currentIndex)
        {
            $("#wizard ").css("display", "none")
            var pname = $("#project").val();
            $("#pname").text(pname);
            var D10 = ($("#D10").val()) == "" ? 0 : parseFloat($("#D10").val()) / 100;
            var D11 = ($("#D11").val());
            var D12 = ($("#D12").val()) == "" ? 0 : parseFloat($("#D12").val()) / 100;
            var D13 = ($("#D13").val()) == "" ? 0 : parseFloat($("#D13").val()) / 100;
            var D16 = ($("#D16").val()) == "" ? 0 : parseFloat($("#D16").val());
            var D17 = ($("#D17").val()) == "" ? 0 : parseFloat($("#D17").val());
            var D18 = ($("#D18").val()) == "" ? 0 : parseFloat($("#D18").val());
            var D19 = ($("#D19").val()) == "" ? 0 : parseFloat($("#D19").val());
            var D24 = ($("#D24").val());
            var D25 = ($("#D25").val());
    
            $("#i1").text((D10*100)+ " %");
            $("#i11").text((D10*100)+ " %");
            $("#i2").text(D11 == 1 ? 'Yes':'No');
            $("#i3").text((D12*100)+ " %");
            $("#i4").text((D13*100)+ " %");
            $("#i5").text(D16);
            $("#i6").text(D17);
            $("#i7").text(D18);
            $("#i8").text(D19);
            if($("#D1").val() == 1){
            var C30 = 2.5 / 100;    
            var D36 = D16;
            var D40 = +D36 * (1 - C30);
            var C28 = 998;
            var C29 = 1000;
            var D21 = +((D17 * C28) - D16) / (D17 * C28);
            
            var D43 = +D21 - D10;
            var D44 = +D43 * C29;
            var D45 = +D18;
            var D46 = +C28 / 1000;
            var D47 = +D13;
            var D48 = +D45 * D47;
            var D49 = +D48 / D46;
            var D50 = +D49 + 1;
            var D51 = +D44 / D50;
            var D52 = (D51 * D45);
            var D58 = +D40;
            var D59 = (D11 == 1 ? (D52 / D18) * (1 - D12) * D18 : D52);
            var D60 = (D11 == 1 ? (D52 / D18) * D12 * D19 : 0);
            var D61 = +D59 + D60;
            var D62 = D61 * D47
            var D63 = +D62 / D61 * 100;
            var D65 = +(D25 == 2 ? (D24 == 1 ? 0.35 : D24 == 2 ? 0.50 : D24 == 3 ? 0.65 : D24 == 4 ? 0.75 : 0) : (D24 == 1 ? 0.50 : D24 == 2 ? 0.75 : D24 == 3 ? 0.90 : D24 == 4 ? 1 : 0)) * (D61 / 100);
            }else{
                var C28 = 62.42718356;
            var K30 = 2.5 / 100;
            var K31 = 62.42797373;
            var K29 = 27;
            var L36 = +K29*D16;
            var L40 = +L36*(1-K30);
            var D21 = 1-((D16)/(D17*C28));
            
            var D43 = +D21 - D10;
            var D44 = +D43 * K29;
            var D45 = +D18*K31;
            var D46 = +C28;
            var D47 = +D13;
            var D48 = +D45 * D47;
            var D49 = +D48 / D46;
            var D50 = +D49 + 1;
            var D51 = +D44 / D50;
            var D52 = D51 * D45;
            var D58a = +L40;
            var D59a = (D11 == 1 ? (D52 / D18) * (1 - D12) * D18 : D52);
            var D60a = (D11 == 1 ? (D52 / D18) * D12 * D19 : 0);
            var D61a = +D59a + D60a;
            var D62a = D61a * D47
            var D63a = +D62a / D61a * 100;
            var D65a = +(D25 == 2 ? (D24 == 1 ? 5 : D24 == 2 ? 8 : D24 == 3 ? 10 : D24 == 4 ? 12 : 0) : (D24 == 1 ? 8 : D24 == 2 ? 11.5 : D24 == 3 ? 14 : D24 == 4 ? 16 : 0)) * (D61a / 100);
          
            }


            $("#i9").text(Math.round((D21*100)*100)/100 + "%");
    
                    if($("#D1").val() == 1){
                      $("#D58").text(Math.round(D58 )+ " kg")
                      $("#D59").text(Math.round(D59) + " kg")
                      $("#D60").text(Math.round(D60) + " kg")
                      $("#D61").text(Math.round(D61))
                      $("#D62").text(Math.round(D62) + " kg")
                      // $("#D63").text(Math.round(D63) +" %")
                      $("#D65").text(Math.round(D65 *100)/100 + " Liter")
                    }else{
                      $("#D58").text(Math.round(D58a) + " lb")
                      $("#D59").text(Math.round(D59a) + " lb")
                      $("#D60").text(Math.round(D60a) + " lb")
                      $("#D61").text(Math.round(D61a))
                      $("#D62").text(Math.round(D62a) + " lb")
                      // $("#D63").text(Math.round(D63a) +" %")
                      $("#D65").text(Math.round(D65a*100)/100 + " Oz")
                    }
                    $("#results").css("display", "block")
                
        }
    });
    $("#D11").on("change  input",function(){
      if($("#D11").val() == 1){
        $("#D12").val(25);
      $("#fly-ash").css('display','block')
      }else{
        $("#D12").val(0);
        $("#D19").val(0);
      $("#fly-ash").css('display','none')
      }
      
    })
    $("#D1").on("change",function(){
        if($("#D1").val() == 1){
          $("#D24a").html(`
          <label for="">
          Temperature (celcius)
      </label>
      <div class="form-holder">
          <select name="" id="D24" class="form-control" required>
              <option value="1" class="option">Below 15</option>
              <option value="2" class="option">16-26</option>
              <option value="3" class="option">26-32</option>
              <option value="4" class="option">33 and above</option>
          </select>
          <i class="zmdi zmdi-chevron-down"></i>
      </div>
          `);
        }else if($("#D1").val() == 2){
          $("#D24a").html(`
          <label for="">
          Temperature (fahrenheit)
      </label>
      <div class="form-holder">
            <select name="" id="D24" class="form-control" required>
              <option value="3" class="option">80-89</option>
              <option value="1" class="option">Below 60</option>
              <option value="2" class="option">60-79</option>
              <option value="4" class="option">90 and above</option>
          </select>
          <i class="zmdi zmdi-chevron-down"></i>
      </div>
        
          `);
         
        }


        if($("#D1").val() == 1){
          $("#D16a").html(`
          <label for="" >
          Aggregate Unit Weight kg/m3 (ASTM C29)
            </label>
            <div class="form-holder">
                <input type="number" id="D16" class="form-control" required>
            </div>
          `);
        }else if($("#D1").val() == 2){
          $("#D16a").html(`
          <label for="" >
          Aggregate Unit Weight lb/ft3 (ASTM C29)
            </label>
            <div class="form-holder">
                <input type="number" id="D16" class="form-control" required>
            </div>
          `);
         
        }

        if($("#D1").val() == 1){
            $("#D65a").html(`
                <div class="form-col">
                        <label for="">
                            Hydration Stabilizer - Liter <b style="margin-left: 50px;" id="D65">123123</b>
                        </label>
                </div>
            `);
          }else if($("#D1").val() == 2){
            $("#D65a").html(`
        <div class="form-col">
            <label for="">
            Hydration Stabilizer - Oz <b style="margin-left: 50px;" id="D65">123123</b>
            </label>
        </div>
            `);
           
          }


      
    });

    $("#print").click(function(){
        $("#reset").css('display','none');
        printJS('res', 'html');
        setTimeout(function() {
            $("#reset").css('display','inline-flex');
          }, 1000);
    });
    // Custom Button Jquery Steps
    $('.forward').click(function(){
    	$("#wizard").steps('next');
    })
    $('.backward').click(function(){
        $("#wizard").steps('previous');
    })
    // Grid 
    $('.grid .grid-item').click(function(){
        $('.grid .grid-item').removeClass('active');
        $(this).addClass('active');
    })

    $("#reset").on('click',function(){
      $("#D1").val("2").change();
      $("#D12").val(25);
      
      $("#fly-ash").css('display','block')
        $("#wizard").trigger("reset");
        $("#results").css("display", "none")
        $("#wizard ").css("display", "block")
        wiz.steps("setStep", 0);
    });
    tippy('#void-tol',{
        content: `Enter the target voids for the finished mix. It is recommended to specify void content between 23-25%. There is a direct correlation between void content and compressive strength. The higher the void content, the lower the compressive strength. The lower the void content, the higher the compressive strength. 
        IMPORTANT: The cement weight must be greater than 390lb/cy or 230 kg/m3 – if this is not the case then you must reduce the target voids in the calculation. If you have already reduced the target voids to the minimum of 23% and you still do not have at least 390lb/cy of cement then you must reach out to your Capillary Concrete representative. A stone change may be necessary at this point.
        `,
      });
      tippy('#fly-tol', {
        content: `Supplementary cementitious materials improve workability and the ultimate strength of pervious concrete, but reduce the 7-day strengths which may be critical to durability upon opening.
        Fly ash is the waste byproduct of burning coal in electrical power plants. Fly ash can replace 5-65% of the cement in a mix. Ground-granulated blast-furnace slag (GGBFS) is the waste byproduct of steel manufacturing. It imparts added strength and durability to concrete, and can replace 20-70% of the cement in the mix. In Capillary Concrete we aim for 25% replacement of the cement mix for fly ash and slag. 
        `,
      });
      tippy('#water-tol', {
        content: `With Capillary Concrete we require a 35% water to cement ratio. Please ensure with any adjustments made on cement that the water is adjusted also to maintain the 35% ratio. On the job adjustments are not always necessary but are required from time to time.`,
      });
      tippy('#unit-tol', {
        content: `The unit weight of the aggregate is needed to calculate aggregate volume as well as measuring available voids for proportioning. Unit weight should be measured according to ASTM C29, however, the sample should be weighed directly from the stockpile without the removal of free water or oven drying.`,
      });
      tippy('#coarse-tol', {
        content: `The specific gravity of aggregates normally used in concrete ranges from 2.5 to 3.0 with an average of 2.68. This measurement is an indicator of strength – the higher the specific gravity the stronger the aggregate. To find this information contact your supplier and request the Saturated Surface Dry Specific Gravity. Saturated Surface Dry, or SSD, is a condition of an aggregate when the permeable voids are filled with water, but no water is present on the exposed surfaces.`,
      });
      tippy('#cement-tol', {
        content: `The specific gravity of Portland cement is 3.15 and this number will be used in most applications. Should you be replacing any of the cement with fly ash or slag you must ask the supplier for the specific gravity of this material which can range from 2.1 – 3.0.`,
      });
      tippy('#hydra-tol', {
        content: `Hydration stabilizer is needed in most Capillary Concrete applications. This liquid admixture retards setting time by controlling the hydration of cement and other cementitious materials while placing the material. The dosage rate will vary based on temperature, humidity, and travel / placement time. Examples of products we recommend are: MasterSet Delvo, Euclid Stasis, Grace Recover, and SikaTard-440. If hydration stabilizer is not available in your area you may use a Type B Retarder which DOES NOT have water reducing characteristics.`,
      });
})
