<template>
  <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
    <div class="shopbox">
      <div class="shop-img">
        <img src="images/portal.png" alt />
        <div class="shopname">Shop Name</div>
        <div class="discount-percent"></div>
        <div class="percent">%</div>
        <div class="rating-event">
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
        </div>
      </div>
      <div class="shop-content" style="padding: 15px 18px;">
        <h4>Neu Kunden Rabatt Neu Kunden Rabatt Neu Kunden Rabatt</h4>
        <p>
          <b>247,10 €</b>
          <span>&nbsp; exkl. USt</span>
        </p>

        <div class="row mt-3 mb-3">
          <div class="col-lg-4" style="padding-top: 6px;">Menge :</div>
          <div class="col-lg-8">
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
          </div>
        </div>

        <div class="text-center shopbtn mb-2">
          <div class="row">
            <div class="col-md-12" style="margin-bottom: 15px;">
              <a href="#" class="btn btn-success btn-block">Add to Cart</a>
            </div>
            <div class="col-md-12">
              <a href="#" class="btn btn-success-o btn-block">View Detail</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
