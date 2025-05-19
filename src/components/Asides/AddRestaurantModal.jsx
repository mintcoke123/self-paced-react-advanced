import { useState } from "react";
import styled from "styled-components";
import { TEXT } from "../../constants/messages";
import { ADD_RESTAURANT_CATEGORY_FILTER } from "../../constants/category";
import { CATEGORY_ICONS } from "../../constants/icons";
import Modal from "../Common/Modal";
import ModalButton from "../Common/ModalButton";
import { Typography } from "../Common/Typography";

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 36px;

  label {
    color: var(--grey-400);
    font-size: 14px;
  }

  input,
  textarea,
  select {
    padding: 8px;
    margin: 6px 0;
    border: 1px solid var(--grey-200);
    border-radius: 8px;
    font-size: 16px;
  }

  textarea {
    resize: none;
  }

  select {
    height: 44px;
    padding: 8px;
    border: 1px solid var(--grey-200);
    border-radius: 8px;
    color: var(--grey-300);
  }
`;

const FormItemRequired = styled(FormItem)`
  label::after {
    padding-left: 4px;
    color: var(--primary-color);
    content: "*";
  }
`;

function AddRestaurantModal({ setIsAddModalOpen, addRestaurantData }) {
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  function handleCloseModal() {
    setIsAddModalOpen(false);
  }

  const handleSubmitRestaurantData = (event) => {
    event.preventDefault();

    const newRestaurant = {
      id: Date.now(),
      category,
      name,
      description,
      alt: category,
      categoryIcon: CATEGORY_ICONS[category],
    };

    addRestaurantData(newRestaurant);
    setIsAddModalOpen(false);
  };

  return (
    <Modal
      handleCloseModal={handleCloseModal}
      modalTitle={TEXT.MODAL_ADD_TITLE}
    >
      <form onSubmit={handleSubmitRestaurantData}>
        <FormItemRequired>
          <Typography.Caption as="label" htmlFor="category">
            {TEXT.MODAL_CATEGORY_TEXT}
          </Typography.Caption>
          <select
            name="category"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">{TEXT.MODAL_CATEGORY_PLACEHOLDER}</option>
            {ADD_RESTAURANT_CATEGORY_FILTER.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </FormItemRequired>

        <FormItemRequired>
          <Typography.Caption as="label" htmlFor="name">
            {TEXT.NAME_LABEL}
          </Typography.Caption>
          <input
            type="text"
            name="name"
            id="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormItemRequired>

        <FormItem>
          <Typography.Caption as="label" htmlFor="description">
            {TEXT.DESCRIPTION_LABEL}
          </Typography.Caption>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="5"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Typography.Caption>
            {TEXT.MODAL_DESCRIPTION_FOOTER}
          </Typography.Caption>
        </FormItem>

        <ModalButton
          buttonType="submit"
          buttonText={TEXT.MODAL_ADD_BUTTON_TEXT}
        />
      </form>
    </Modal>
  );
}

export default AddRestaurantModal;
