---
id: Delete modal
section: components
has_children: true
nav_order: 2
has_toc: true
---

import {useState} from 'react';
import { Button, Text, Modal } from '@patternfly/react-core';

### Delete modal

```js
modal = () => {

  const modalVariant = ButtonVariant.danger;
  const titleIconVariant = 'warning';
  const showClose = true;
  const buttonConfirmVariant = ButtonVariant.danger;
  const buttonCancelVariant = ButtonVariant.link;
  const confirmActionLabel = 'Delete';
  const cancelActionLabel = 'Cancel';
  const description = 'Kafka instance will be deleted';
  const ariaLabel = 'Test';
  const title = 'Delete instance?';

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  }

  const isDisabledConfirmButton = () => {
    // if (instanceStatus === InstanceStatus.READY) {
    //   if (instanceNameInput?.toLowerCase() === selectedInstanceName?.toLowerCase()) {
    //     return false;
    //   }
    //   return true;
    // }
    return false;
  };

  return (
    <>
    <Button onClick={handleModalToggle}>Show Delete Modal</Button>
    <Modal
      variant={ButtonVariant.danger}
      isOpen={isModalOpen}
      aria-label={ariaLabel}
      title={title}
      titleIconVariant={titleIconVariant}
      showClose={showClose}
      onClose={handleModalToggle}
      // appendTo={getModalAppendTo}
      actions={[
        <Button
          // id={id}
          // key={key}
          variant={buttonConfirmVariant}
          onClick={() => onClickConfirmButton && onClickConfirmButton(selectedItemData)}
          isDisabled={isDisabledConfirmButton}
        >
          {confirmActionLabel}
        </Button>,
        <Button
          // id={cancelButtonId}
          // key={cancelButtonKey}
          variant={buttonCancelVariant}
          onClick={handleModalToggle}
        >
          {cancelActionLabel}
        </Button>,
      ]}
    >
      {description && (
        <Text dangerouslySetInnerHTML={{ __html: description || '' }} />
      )}
    </Modal>
    </>
  )
}
``` 