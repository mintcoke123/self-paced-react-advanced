import { useState } from "react";
import styled from "styled-components";
import { TEXT } from "../../constants/messages";
import { ADD_RESTAURANT_CATEGORY_FILTER } from "../../constants/category";
import { CATEGORY_ICONS } from "../../constants/icons";
import Modal from "../Common/Modal";
import Button from "../Common/Button";
import { Typography } from "../Common/Typography";

const FormLabel = styled.label`
  color: var(--grey-400);
  font-size: 14px;
  ${({ required }) =>
    required &&
    `
    &::after {
      padding-left: 4px;
      color: var(--primary-color);
      content: "*";
    }
  `}
`;

const FormInput = styled.input`
  padding: 8px;
  margin: 6px 0;
  border: 1px solid var(--grey-200);
  border-radius: 8px;
  font-size: 16px;
`;

const FormTextarea = styled.textarea`
  padding: 8px;
  margin: 6px 0;
  border: 1px solid var(--grey-200);
  border-radius: 8px;
  font-size: 16px;
  resize: none;
`;

const FormSelect = styled.select`
  padding: 8px;
  margin: 6px 0;
  border: 1px solid var(--grey-200);
  border-radius: 8px;
  font-size: 16px;
  height: 44px;
  color: var(--grey-300);
`;

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 36px;
`;

const HelpText = styled.span`
  color: var(--grey-300);
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
        <FormItem>
          <FormLabel htmlFor="category" required>
            <Typography.Caption>카테고리</Typography.Caption>
          </FormLabel>
          <FormSelect
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
          </FormSelect>
        </FormItem>

        <FormItem>
          <FormLabel htmlFor="name" required>
            <Typography.Caption>이름</Typography.Caption>
          </FormLabel>
          <FormInput
            type="text"
            name="name"
            id="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormItem>

        <FormItem>
          <FormLabel htmlFor="description">
            <Typography.Caption>설명</Typography.Caption>
          </FormLabel>
          <FormTextarea
            name="description"
            id="description"
            cols="30"
            rows="5"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <HelpText>
            <Typography.Caption>
              메뉴 등 추가 정보를 입력해 주세요.
            </Typography.Caption>
          </HelpText>
        </FormItem>

        <Button
          variant="modal"
          buttonType="submit"
          handleButtonOnClick={handleSubmitRestaurantData}
          buttonText={TEXT.MODAL_ADD_BUTTON_TEXT}
        />
      </form>
    </Modal>
  );
}

export default AddRestaurantModal;
