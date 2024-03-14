import React from "react";
import ProductItem from "./ProductItem";
import { enGB } from "date-fns/locale";
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  MenuItem,
  ListItemText,
  Checkbox,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { toDate } from "date-fns";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

const PRODUCT_TYPE = ["Lote", "Casa"];

const EMPREENDIMENTOS = [
  {
    unidadesVendidas: "2",
    valorTotal: "885.855,00",
    tipoUnidade: "Lote",
    nomeEmpreendimento: "Jardins Turim",
  },
  {
    unidadesVendidas: "1",
    valorTotal: "2.285.755,00",
    tipoUnidade: "Casa",
    nomeEmpreendimento: "Jardins Genebra",
  },
  {
    unidadesVendidas: "4",
    valorTotal: "635.345,00",
    tipoUnidade: "Lote",
    nomeEmpreendimento: "Jardins Miami",
  },
  {
    unidadesVendidas: "5",
    valorTotal: "885.890,90",
    tipoUnidade: "Lote",
    nomeEmpreendimento: "Jardins Roma",
  },
];

const ProductList = () => {
  const [productName, setProductName] = React.useState([]);
  const [productType, setProductType] = React.useState([]);
  const [initialDate, setInitialDate] = React.useState(
    toDate("2022-04-17 00:00:00")
  );
  const [finallDate, setFinallDate] = React.useState(
    toDate("2022-04-18 00:00:00")
  );

  const handleChangeProduct = (event) => {
    const {
      target: { value },
    } = event;
    setProductName(typeof value === "string" ? value.split(",") : value);
  };

  const handleChangeProductType = (event) => {
    const {
      target: { value },
    } = event;
    setProductType(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <>
      <Box>
        <Box sx={styles.containerFilter}>
          <Box>
            <FormControl sx={{ width: 300 }}>
              <InputLabel id="product-name-checkbox">
                Selecione o empreendimento
              </InputLabel>
              <Select
                labelId="product-name-checkbox"
                id="checkbox-product-name"
                multiple
                value={productName}
                onChange={handleChangeProduct}
                input={<OutlinedInput label="Selecione o empreendimento" />}
                renderValue={(select) => select.join(", ")}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={productName.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box>
            <FormControl sx={{ width: 160 }}>
              <InputLabel id="product-type-checkbox">
                Selecione o tipo
              </InputLabel>
              <Select
                labelId="product-type-checkbox"
                id="checkbox-product-type"
                multiple
                value={productType}
                onChange={handleChangeProductType}
                input={<OutlinedInput label="Selecione o tipo" />}
                renderValue={(select) => select.join(", ")}
                MenuProps={MenuProps}
              >
                {PRODUCT_TYPE.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={productType.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          <LocalizationProvider
            dateAdapter={AdapterDateFns}
            adapterLocale={enGB}
          >
            <DatePicker
              sx={styles.initialDate}
              label="Data inicial"
              value={initialDate}
              onChange={(newDate) => setInitialDate(newDate)}
            />
          </LocalizationProvider>
          <LocalizationProvider
            dateAdapter={AdapterDateFns}
            adapterLocale={enGB}
          >
            <DatePicker
            sx={styles.initialDate}
              label="Data Final"
              value={finallDate}
              onChange={(newDate) => setFinallDate(newDate)}
            />
          </LocalizationProvider>
        </Box>
        <Box sx={styles.list} >
          {EMPREENDIMENTOS.map((empreendimento) => (
            <ProductItem
              key={empreendimento.nomeEmpreendimento}
              quantidadeUnidades={empreendimento.unidadesVendidas}
              valorUnidade={empreendimento.valorTotal}
              tipoUnidade={empreendimento.tipoUnidade}
              nomeEmpreendimento={empreendimento.nomeEmpreendimento}
            />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default ProductList;

const styles = {
  containerFilter: {
    display: "flex",
    width: '100%',
    justifyContent: "space-between",
  },
  initialDate: {
    width: '150px'
  },
  list: {
    marginTop: '30px'
  }

};
