<template>
  <div class="package-sec" style="margin-top: 60px">
    <div class="row">
      <div class="col-lg-4">
        <img src="images/portal.png" alt class="img-fluid" />
        <h6>Neu Kunden Rabatt Neu Kunden Rabatt Neu Kunden Rabatt</h6>
        <p>Neu Kunden Rabatt</p>
      </div>
      <div class="col-lg-4">
        <img src="images/portal.png" alt class="img-fluid" />
        <h6>Neu Kunden Rabatt Neu Kunden Rabatt Neu Kunden Rabatt</h6>
        <p>Neu Kunden Rabatt</p>
      </div>
      <div class="col-lg-3 pt-3">
        <p class="text-center">Menge :</p>
        <!--<div>-->
        <div class="input-group">
          <span class="input-group-btn">
            <button
              type="button"
              class="btn btn-default btn-number"
              disabled="disabled"
              data-type="minus"
              data-field="quant[1]"
              style="border: 1px solid #ced4da;border-radius: 7px;border-top-right-radius: 0px;border-bottom-right-radius: 0px;padding: 8.5px 18px;"
            >
              <span class="fa fa-minus"></span>
            </button>
          </span>
          <input
            type="text"
            name="quant[1]"
            class="form-control input-number"
            value="0"
            min="0"
            max="10"
            style="text-align: center;"
          />
          <span class="input-group-btn">
            <button
              type="button"
              class="btn btn-default btn-number"
              data-type="plus"
              data-field="quant[1]"
              style="border: 1px solid #ced4da;border-radius: 7px;border-top-left-radius: 0px;border-bottom-left-radius: 0px;padding: 8.5px 18px;"
            >
              <span class="fa fa-plus"></span>
            </button>
          </span>
        </div>
        <h5 class="mt-3 text-center mb-0">247,10 €</h5>
        <p class="text-center">exkl. USt</p>
        <div class="row">
          <div class="col-md-12" style="margin-bottom: 15px;">
            <a href="#" class="btn btn-success btn-block">Add to Cart</a>
          </div>
          <div class="col-md-12">
            <a href="#" class="btn btn-success-o btn-block">View Detail</a>
          </div>
        </div>
        <!--</div>-->
      </div>
    </div>
    <span class="title-bage">Star Package</span>
  </div>
</template>
