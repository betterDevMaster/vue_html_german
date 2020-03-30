<template>
  <div
    class="modal fade in"
    id="pos-service-popup"
    tabindex="-1"
    role="dialog"
    aria-labelledby="myModalLabel"
    aria-hidden="true"
    style="z-index: 9999;"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="m-auto">Contact Us</h5>
        </div>
        <div class="modal-body pt-1 pos-pop-up-form">
          <nav class="nav-justified pos-service-popup">
            <div
              class="nav nav-tabs"
              id="nav-tab"
              role="tablist"
              style="margin-left:-16px;margin-right: -16px;"
            >
              <a
                class="nav-item nav-link active"
                id="pop1-tab"
                data-toggle="tab"
                href="#deliver"
                role="tab"
                aria-controls="pop1"
                aria-selected="true"
              >Deliver</a>
              <a
                class="nav-item nav-link"
                id="pop2-tab"
                data-toggle="tab"
                href="#dinners"
                role="tab"
                aria-controls="pop2"
                aria-selected="false"
              >Dinners</a>
              <a
                class="nav-item nav-link"
                id="pop3-tab"
                data-toggle="tab"
                href="#partyservice"
                role="tab"
                aria-controls="pop3"
                aria-selected="false"
              >Partyservice</a>
              <a
                class="nav-item nav-link"
                id="pop4-tab"
                data-toggle="tab"
                href="#restaurants"
                role="tab"
                aria-controls="pop3"
                aria-selected="false"
              >Restaurants</a>
            </div>
          </nav>
          <div class="tab-content" id="nav-tabContent">
            <div
              class="tab-pane fade show active"
              id="deliver"
              role="tabpanel"
              aria-labelledby="pop1-tab"
            >
              <form>
                <div class="row">
                  <div class="col-lg-12">
                    <ul class="list-inline mb-0 select-service-li">
                      <li class="list-inline-item">
                        <span class="button-checkbox">
                          <button type="button" class="btn btn-block" data-color="success">POS</button>
                          <input type="checkbox" class="d-none" />
                        </span>
                      </li>
                      <li class="list-inline-item">
                        <span class="button-checkbox">
                          <button
                            type="button"
                            class="btn btn-block"
                            data-color="success"
                          >Online Shop</button>
                          <input type="checkbox" class="d-none" />
                        </span>
                      </li>
                      <li class="list-inline-item">
                        <span class="button-checkbox">
                          <button type="button" class="btn btn-block" data-color="success">Table App</button>
                          <input type="checkbox" class="d-none" />
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <hr class="hr" />
                <div class="row" style="padding-top: 15px;">
                  <div class="col-lg-4">
                    <div class="form-group">
                      <label>Person Name</label>
                      <input type="text" placeholder="Enter Person name" class="form-control" />
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="form-group">
                      <label>Last Name</label>
                      <input type="text" placeholder="Enter Lastname" class="form-control" />
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="form-group">
                      <label>Email Address</label>
                      <input type="text" placeholder="Enter Email address" class="form-control" />
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="form-group">
                      <label>Mobile Number</label>
                      <input type="text" placeholder="Enter Mobile number" class="form-control" />
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="form-group">
                      <label>Shopname</label>
                      <input type="text" placeholder="Enter Shopname" class="form-control" />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div class="tab-pane fade" id="dinners" role="tabpanel" aria-labelledby="pop2-tab">
              <form>
                <div class="row">
                  <div class="col-lg-12">
                    <ul class="list-inline mb-0 select-service-li">
                      <li class="list-inline-item">
                        <span class="button-checkbox">
                          <button type="button" class="btn btn-block" data-color="success">POS</button>
                          <input type="checkbox" class="d-none" />
                        </span>
                      </li>
                      <li class="list-inline-item">
                        <span class="button-checkbox">
                          <button
                            type="button"
                            class="btn btn-block"
                            data-color="success"
                          >Online Shop</button>
                          <input type="checkbox" class="d-none" />
                        </span>
                      </li>
                      <li class="list-inline-item">
                        <span class="button-checkbox">
                          <button type="button" class="btn btn-block" data-color="success">Table App</button>
                          <input type="checkbox" class="d-none" />
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-4">
                    <div class="form-group">
                      <label>Person Name</label>
                      <input type="text" placeholder="Enter Person name" class="form-control" />
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="form-group">
                      <label>Last Name</label>
                      <input type="text" placeholder="Enter Lastname" class="form-control" />
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="form-group">
                      <label>Shopname</label>
                      <input type="text" placeholder="Enter Shopname" class="form-control" />
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="form-group">
                      <label>Mobile Number</label>
                      <input type="text" placeholder="Enter Mobile number" class="form-control" />
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="form-group">
                      <label>Email Address</label>
                      <input type="text" placeholder="Enter Email address" class="form-control" />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div class="tab-pane fade" id="partyservice" role="tabpanel" aria-labelledby="pop3-tab">
              <form>
                <div class="row">
                  <div class="col-lg-12">
                    <ul class="list-inline mb-0 select-service-li">
                      <li class="list-inline-item">
                        <span class="button-checkbox">
                          <button type="button" class="btn btn-block" data-color="success">POS</button>
                          <input type="checkbox" class="d-none" />
                        </span>
                      </li>
                      <li class="list-inline-item">
                        <span class="button-checkbox">
                          <button
                            type="button"
                            class="btn btn-block"
                            data-color="success"
                          >Online Shop</button>
                          <input type="checkbox" class="d-none" />
                        </span>
                      </li>
                      <li class="list-inline-item">
                        <span class="button-checkbox">
                          <button type="button" class="btn btn-block" data-color="success">Table App</button>
                          <input type="checkbox" class="d-none" />
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-4">
                    <div class="form-group">
                      <label>Person Name</label>
                      <input type="text" placeholder="Enter Person name" class="form-control" />
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="form-group">
                      <label>Last Name</label>
                      <input type="text" placeholder="Enter Lastname" class="form-control" />
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="form-group">
                      <label>Shopname</label>
                      <input type="text" placeholder="Enter Shopname" class="form-control" />
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="form-group">
                      <label>Mobile Number</label>
                      <input type="text" placeholder="Enter Mobile number" class="form-control" />
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="form-group">
                      <label>Email Address</label>
                      <input type="text" placeholder="Enter Email address" class="form-control" />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div class="tab-pane fade" id="restaurants" role="tabpanel" aria-labelledby="pop3-tab">
              <form>
                <div class="row">
                  <div class="col-lg-12">
                    <ul class="list-inline mb-0 select-service-li">
                      <li class="list-inline-item">
                        <span class="button-checkbox">
                          <button type="button" class="btn btn-block" data-color="success">POS</button>
                          <input type="checkbox" class="d-none" />
                        </span>
                      </li>
                      <li class="list-inline-item">
                        <span class="button-checkbox">
                          <button
                            type="button"
                            class="btn btn-block"
                            data-color="success"
                          >Online Shop</button>
                          <input type="checkbox" class="d-none" />
                        </span>
                      </li>
                      <li class="list-inline-item">
                        <span class="button-checkbox">
                          <button type="button" class="btn btn-block" data-color="success">Table App</button>
                          <input type="checkbox" class="d-none" />
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-4">
                    <div class="form-group">
                      <label>Person Name</label>
                      <input type="text" placeholder="Enter Person name" class="form-control" />
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="form-group">
                      <label>Last Name</label>
                      <input type="text" placeholder="Enter Lastname" class="form-control" />
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="form-group">
                      <label>Shopname</label>
                      <input type="text" placeholder="Enter Shopname" class="form-control" />
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="form-group">
                      <label>Mobile Number</label>
                      <input type="text" placeholder="Enter Mobile number" class="form-control" />
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="form-group">
                      <label>Email Address</label>
                      <input type="text" placeholder="Enter Email address" class="form-control" />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-success">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>
