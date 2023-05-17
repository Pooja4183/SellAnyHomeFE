import { getImageUrl } from './utils.js';

const WhoAreYouForm = ({
    houseWorthInfo,
    whoAreYouInfo,
    handleWhoAreYouChange,
  }) => {
    const history = useHistory();
  
    function handleSubmit(event) {
      event.preventDefault();
      history.push("/sell/listingplatform");
    }
  
    return (
      <Grid container className={Sellstyle.formstyleform}>
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          sx={{
            textAlign: {
              xs: "center",
              sm: "center",
              lg: "left",
              md: "left",
            },
          }}
          className={Sellstyle.formstyle}
        >
          <div className={Sellstyle.label}>
            <p>Is This The Correct Address? If Not Click Here</p>
            <h5>{houseWorthInfo.address}</h5>
          </div>
        </Grid>
  
        <Grid
          item
          xs={12}
          sm={12}
          md={8}
          sx={{
            textAlign: {
              xs: "center",
              sm: "center",
              lg: "left",
              md: "left",
            },
          }}
          className={Sellstyle.formstyle}
        >
          <h1 className={Sellstyle.whoAreyou}>Who Are You?</h1>
          <form onSubmit={handleSubmit}>
            <FormControl>
              <Stack direction="column" spacing={2}>
                <RadioGroup
                  name="controlled-radio-buttons-group"
                  value={whoAreYouInfo.value}
                  onChange={handleWhoAreYouChange}
                >
                  <Stack direction="column" spacing={2}>
                    <StyledFormControlLabel
                      value="I am the owner of this home"
                      control={<Radio />}
                      label="I am the owner of this home"
                    />
                    <StyledFormControlLabel
                      value="I am a realtor or agent"
                      control={<Radio />}
                      label="I am a realtor or agent"
                    />
                    <StyledFormControlLabel
                      value="Other"
                      control={<Radio />}
                      label="Other"
                    />
                  </Stack>
                </RadioGroup>
  
                <StyledButton type="submit" variant="outlined">
                  Next
                </StyledButton>
              </Stack>
            </FormControl>
          </form>
        </Grid>
      </Grid>
    );
  };
  

function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <div>
      <Avatar
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi', 
          imageId: 'YfeOqp2'
        }}
      />
      <Avatar
        size={80}
        person={{
          name: 'Aklilu Lemma', 
          imageId: 'OKS67lh'
        }}
      />
      <Avatar
        size={50}
        person={{ 
          name: 'Lin Lanying',
          imageId: '1bX5QH6'
        }}
      />
    </div>
  );
}
