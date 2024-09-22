import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useNavigate } from 'react-router-dom';

export default function CustomSeparator() {
  const navigate = useNavigate();

  const handleClick = (event, path) => {
    event.preventDefault();
    console.info(`You clicked a breadcrumb: ${path}`);
    navigate(path);
  };

  const breadcrumbs = [
    <Link
      to="/"
      underline="hover"
      key="1"
      color="inherit"
      onClick={(event) => handleClick(event, '/')}
    >
      Home
    </Link>,
    <Link
      to="/products"
      underline="hover"
      key="2"
      color="inherit"
      onClick={(event) => handleClick(event, '/products')}
    >
      Products
    </Link>,
    <Typography key="3" sx={{ color: 'text.primary' }}>
      Cart
    </Typography>,
  ];

  return (
    <Stack spacing={2}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}
