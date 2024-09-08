/* eslint-disable no-unused-vars */
import styled, { css } from "styled-components";
import GradientHighlight from "../ui/GradientHighlight";
import { HiShoppingCart, HiTicket } from "react-icons/hi2";
import { GiTakeMyMoney } from "react-icons/gi";
import GradientIcon from "../ui/GradientIcon";
import Heading from "../ui/Heading";
import CartBeforeConfirm from "../ui/CartBeforeConfirm";
import Button from "../ui/Button";
import { getCuisineSingle } from "../services/apiCuisines";
import { useDispatch, useSelector } from "react-redux";
import { useGetUser } from "../features/authentication/useGetUser";
import { useCreateDelivery } from "../features/delivery/useDelivery";
import { useNavigate } from "react-router-dom";
import { useCreateANewBooking } from "../features/cuisines/useVenue";
import { clearCartFromReduxState } from "../features/cart/cartSlice";
import { removeVenueBooking } from "../features/cart/venueBookingSlice";

const Container = styled.div`
  height: 60rem;
  background-color: var(--color-grey-900);
  display: grid;
  grid-template-columns: 1.2fr 1fr;
`;

const CheckoutDetailsContainer = styled.div`
  padding: 5rem 10rem;
  padding-right: 0;
  overflow-y: scroll;
`;

const CheckoutBillingContainer = styled.div`
  background-color: var(--color-grey-800);
  position: relative;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
`;

const HeadTextDiv = styled.div`
  font-family: "Indie Flower", cursive;
  font-size: 4.4rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 1.4rem;
`;

const SummaryDiv = styled.div`
  padding: 2rem 1rem;
`;

const SummaryDivHead = styled.div`
  ${(props) =>
    props.addpadding == true &&
    css`
      padding: 3rem 5rem;
      padding-bottom: 0;
    `}
`;

const BillingCuisinesContainer = styled.div`
  gap: 2rem;
  border-radius: 1.5rem;
  display: grid;
  grid-template-columns: 35rem 1fr;
  align-items: center;
  padding: 0rem 5rem;
`;

const BillingCuisineDiv = styled.div`
  display: grid;
  grid-template-columns: 6rem 1fr;
  align-items: center;
  column-gap: 1.2rem;
  width: 100%;
`;

const BillingCuisineLogo = styled.div`
  height: 6rem;
  width: 6rem;
  border-radius: 50%;
  overflow: hidden;
`;

const LogoImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const BillingCusineTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const BillingCuisineName = styled.span`
  font-weight: 600;
  color: var(--color-grey-200);
  font-size: 2rem;
`;

const BillingCodesContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  & span {
    font-weight: 600;
    color: var(--color-grey-200);
    font-size: 1rem;
    font-style: italic;

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

// OFFER REDEEM DIV

const BillingOfferForm = styled.form`
  display: flex;
  align-items: center;
  gap: 1rem;

  & button {
    background-color: transparent;
    border: none;
  }
`;
const BillingOfferInputDiv = styled.input`
  background-color: transparent;
  width: 100%;
  outline: none;
  border: 1px solid var(--color-grey-700);
  padding: 1rem;
  color: var(--color-grey-300);
`;

const BillingLeftContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* gap: 1.3rem; */
  padding: 3rem 0;
  padding-bottom: 0;
  height: 100%;
`;

const GrandTotalDiv = styled.div`
  /* position: absolute; */
  /* top: 72.2%;
  width: 100%; */
  background-color: var(--color-grey-900);
  padding: 1.5rem 2rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const GrandTotalTextDiv = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const GrandTotalTextBg = styled.span`
  color: var(--color-grey-200);
  font-weight: 600;
  font-size: 2.5rem;
`;

const GrandTotalTextSm = styled.span`
  color: var(--color-grey-200);
  font-weight: 600;
  font-size: 1.8rem;
`;

function Checkout() {
  const storeCart = useSelector((store) => store.cart);
  const storeVenue = useSelector((store) => store.venue);
  const { data, isLoading, error } = useGetUser();
  const user = !isLoading && data;
  const navigate = useNavigate();

  const { cart, cartTotal } = storeCart;
  const { venue } = storeVenue;
  const totalDeliveryCharge = cart.map((item) => item.deliveryPrice);
  const dispatch = useDispatch();

  const { isLoading: isCreatingNewOrder, newOrder } = useCreateDelivery();
  const { createANewVenueBooking } = useCreateANewBooking();
  function handleConfirmOrder() {
    if (cart.length > 0) {
      const orderObj = {
        orders: { cart: storeCart.cart, cartTotal: storeCart.cartTotal },
      };
      console.log(orderObj);
      newOrder(orderObj);
    } else if (Object.keys(venue).length > 1) {
      createANewVenueBooking(venue);
      // console.log(venue);
    }
    dispatch(clearCartFromReduxState());
    dispatch(removeVenueBooking());
  }
  if (!isLoading && !user) {
    navigate("/login");
    return null;
  }
  return (
    <Container>
      <CheckoutDetailsContainer>
        <HeadTextDiv>
          <GradientHighlight>
            <span>Checkout</span>
          </GradientHighlight>
          <GradientIcon iconheight={5}>
            <HiShoppingCart />
          </GradientIcon>
        </HeadTextDiv>

        <SummaryDiv>
          <SummaryDivHead>
            <Heading as="h2" color="light">
              Summary
            </Heading>
          </SummaryDivHead>
          {cart && <CartBeforeConfirm size="large" />}
        </SummaryDiv>
      </CheckoutDetailsContainer>

      <CheckoutBillingContainer>
        <SummaryDivHead addpadding={true}>
          <Heading as="h2" color="light">
            Billing
          </Heading>
        </SummaryDivHead>

        <BillingLeftContainer>
          <BillingCuisinesContainer>
            {cart.map((item) => (
              <>
                <BillingCuisineDiv>
                  <BillingCuisineLogo>
                    <LogoImg src="./img/hotel-001.jpg" alt="logo-img" />
                  </BillingCuisineLogo>
                  <BillingCusineTextDiv>
                    <BillingCuisineName>{item?.cuisineName}</BillingCuisineName>
                    <BillingCodesContainer>
                      <span>THC50OFF</span>
                      <span>THCW10OFF</span>
                    </BillingCodesContainer>
                  </BillingCusineTextDiv>
                </BillingCuisineDiv>

                <BillingOfferForm>
                  <BillingOfferInputDiv
                    type="text"
                    placeholder="Redeem Offer Code"
                  />
                  <button>
                    <GradientIcon iconheight={3.5}>
                      <span>
                        <HiTicket />
                      </span>
                    </GradientIcon>
                  </button>
                </BillingOfferForm>
              </>
            ))}

            {Object.keys(venue).length > 1 && (
              <>
                <BillingCuisineDiv>
                  <BillingCuisineLogo>
                    <LogoImg src="./img/hotel-001.jpg" alt="logo-img" />
                  </BillingCuisineLogo>
                  <BillingCusineTextDiv>
                    <BillingCuisineName>{venue.cuisineName}</BillingCuisineName>
                    <BillingCodesContainer>
                      <span>THC50OFF</span>
                      <span>THCW10OFF</span>
                    </BillingCodesContainer>
                  </BillingCusineTextDiv>
                </BillingCuisineDiv>

                <BillingOfferForm>
                  <BillingOfferInputDiv
                    type="text"
                    placeholder="Redeem Offer Code"
                  />
                  <button>
                    <GradientIcon iconheight={3.5}>
                      <span>
                        <HiTicket />
                      </span>
                    </GradientIcon>
                  </button>
                </BillingOfferForm>
              </>
            )}
          </BillingCuisinesContainer>

          <GrandTotalDiv>
            {cartTotal > 0 ? (
              <GrandTotalTextDiv>
                <GrandTotalTextSm>Delivery : </GrandTotalTextSm>
                <GrandTotalTextSm>
                  $
                  {totalDeliveryCharge
                    .reduce((acc, cur) => acc + cur, 0)
                    .toFixed(2)}{" "}
                </GrandTotalTextSm>
              </GrandTotalTextDiv>
            ) : venue.total > 0 ? (
              <GrandTotalTextDiv>
                <GrandTotalTextSm>Vat(13%) : </GrandTotalTextSm>
                <GrandTotalTextSm>
                  ${(venue.total * 0.13).toFixed(2)}
                </GrandTotalTextSm>
              </GrandTotalTextDiv>
            ) : (
              <></>
            )}
            <GrandTotalTextDiv>
              <GrandTotalTextBg>Grand Total : </GrandTotalTextBg>
              <GrandTotalTextBg>
                $
                {cartTotal > 0
                  ? (cartTotal * 0.13 + cartTotal + 10).toFixed(2)
                  : venue.total > 0
                  ? (venue.total * 0.13 + venue.total + 10).toFixed(2)
                  : "0.00"}
              </GrandTotalTextBg>
            </GrandTotalTextDiv>
            <div>
              <Button
                size="medium"
                variation="primary"
                onClick={handleConfirmOrder}
              >
                Confirm Order
              </Button>
            </div>
          </GrandTotalDiv>
        </BillingLeftContainer>
      </CheckoutBillingContainer>
    </Container>
  );
}

export default Checkout;
