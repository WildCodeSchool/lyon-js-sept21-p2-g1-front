import React from 'react';
import cx from 'clsx';
// import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderRounded from '@mui/icons-material/FavoriteBorderRounded';
import Share from '@mui/icons-material/Share';
import { useSoftRiseShadowStyles } from '@mui-treasury/styles/shadow/softRise';
import { useSlopeCardMediaStyles } from '@mui-treasury/styles/cardMedia/slope';
import { useN01TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n01';
import TextInfoContent from '@mui-treasury/components/content/textInfo';

// const useStyles = makeStyles(() => ({
//   root: {
//     width: 350,
//     height: 200,
//     margin: 'auto',
//   },
//   content: {
//     padding: 24,
//   },
// }));

const CardCityMui = React.memo(function PostCard({ img, name, quantity }) {
  // const cardStyles = useStyles();
  const mediaStyles = useSlopeCardMediaStyles();
  const shadowStyles = useSoftRiseShadowStyles();
  const textCardContentStyles = useN01TextInfoContentStyles();
  return (
    <Card className={cx(shadowStyles.root)}>
      <CardMedia classes={mediaStyles} image={img} />
      <CardContent>
        <TextInfoContent
          classes={textCardContentStyles}
          heading={name}
          body={quantity}
        />
      </CardContent>
      <Box px={5} pb={2} mt={0}>
        <IconButton>
          <Share />
        </IconButton>
        <IconButton>
          <FavoriteBorderRounded />
        </IconButton>
      </Box>
    </Card>
  );
});

export default CardCityMui;
