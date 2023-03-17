import { useState } from 'react';
import { Navbar, Center, Tooltip, UnstyledButton, createStyles, Stack, rem } from '@mantine/core';
import { MantineLogo } from '@mantine/ds';
import { IconHome2, IconGauge, IconSettings } from '@tabler/icons-react';
import { Outlet, useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';

const useStyles = createStyles((theme) => ({
  link: {
    width: rem(50),
    height: rem(50),
    borderRadius: theme.radius.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.white,
    opacity: 0.85,

    '&:hover': {
      opacity: 1,
      backgroundColor: theme.fn.lighten(
        theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background,
        0.1
      ),
    },
  },

  active: {
    opacity: 1,
    '&, &:hover': {
      backgroundColor: theme.fn.lighten(
        theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background,
        0.15
      ),
    },
  },
}));

const menuItems = [
  {
    icon: IconHome2,
    location: "/",
    label: "Home"
  },
  {
    icon: IconGauge,
    location: "/caption",
    label: "Caption"
  },
  {
    icon: IconSettings,
    location: "/settings",
    label: "Settings"
  }
]

function NavbarLink({ icon: Icon, label, active, onClick }) {

  const { classes, cx } = useStyles();
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton onClick={onClick} className={cx(classes.link, { [classes.active]: active })}>
        <Icon size="1.2rem" stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}

export const Nav = () => {

  const [active, setActive] = useState(2);
  const navigate = useNavigate();

  const handleNavigate = (link, index) => {
    setActive(index);
    navigate(link.location)
  }

  const links = menuItems.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => handleNavigate(link, index)}
    />
  ));

  return (
    <>
      <Navbar
        width={{ base: 80 }}                
        p="md"
        sx={(theme) => ({
          backgroundColor: theme.fn.variant({ variant: 'filled', color: theme.primaryColor })
            .background,
        })}
      >
        <Center>
          <MantineLogo type="mark" inverted size={30} />
        </Center>

        <Navbar.Section grow mt={50}>
          <Stack justify="center" spacing={0}>
            {links}
          </Stack>
        </Navbar.Section>
      </Navbar>

      <div css={() => css({ width: "100%" })}>
        <Outlet />
      </div>
    </>
  )
}