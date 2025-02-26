import Box from '@mui/material/Box';

// ----------------------------------------------------------------------

interface ConfigTabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function ConfigTabPanel({ children, index, value, ...other }: ConfigTabPanelProps) {
  return (
    <Box
      aria-labelledby={`simple-tab-${index}`}
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      role='tabpanel'
      {...other}
    >
      {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
    </Box>
  );
}

export default ConfigTabPanel;
