---
license: apache-2.0
tags:
- generated_from_trainer
metrics:
- f1
- accuracy
model-index:
- name: distilBERT-finetuned-resumes-sections
  results: []
---

<!-- This model card has been generated automatically according to the information the Trainer had access to. You
should probably proofread and complete it, then remove this comment. -->

# distilBERT-finetuned-resumes-sections

This model is a fine-tuned version of [Geotrend/distilbert-base-en-fr-cased](https://huggingface.co/Geotrend/distilbert-base-en-fr-cased) on an unknown dataset.
It achieves the following results on the evaluation set:
- Loss: 0.0369
- F1: 0.9652
- Roc Auc: 0.9808
- Accuracy: 0.9621

## Model description

More information needed

## Intended uses & limitations

More information needed

## Training and evaluation data

More information needed

## Training procedure

### Training hyperparameters

The following hyperparameters were used during training:
- learning_rate: 2e-05
- train_batch_size: 8
- eval_batch_size: 8
- seed: 42
- optimizer: Adam with betas=(0.9,0.999) and epsilon=1e-08
- lr_scheduler_type: linear
- num_epochs: 20

### Training results

| Training Loss | Epoch | Step  | Validation Loss | F1     | Roc Auc | Accuracy |
|:-------------:|:-----:|:-----:|:---------------:|:------:|:-------:|:--------:|
| 0.0509        | 1.0   | 1173  | 0.0331          | 0.9439 | 0.9659  | 0.9356   |
| 0.024         | 2.0   | 2346  | 0.0274          | 0.9550 | 0.9750  | 0.9493   |
| 0.0148        | 3.0   | 3519  | 0.0290          | 0.9493 | 0.9712  | 0.9446   |
| 0.0089        | 4.0   | 4692  | 0.0324          | 0.9492 | 0.9714  | 0.9442   |
| 0.0071        | 5.0   | 5865  | 0.0317          | 0.9540 | 0.9732  | 0.9476   |
| 0.0064        | 6.0   | 7038  | 0.0324          | 0.9527 | 0.9742  | 0.9484   |
| 0.0036        | 7.0   | 8211  | 0.0320          | 0.9574 | 0.9766  | 0.9540   |
| 0.0042        | 8.0   | 9384  | 0.0367          | 0.9528 | 0.9732  | 0.9493   |
| 0.0052        | 9.0   | 10557 | 0.0342          | 0.9563 | 0.9757  | 0.9531   |
| 0.0027        | 10.0  | 11730 | 0.0294          | 0.9629 | 0.9800  | 0.9595   |
| 0.0017        | 11.0  | 12903 | 0.0355          | 0.9605 | 0.9778  | 0.9582   |
| 0.0022        | 12.0  | 14076 | 0.0338          | 0.9627 | 0.9792  | 0.9591   |
| 0.0012        | 13.0  | 15249 | 0.0358          | 0.9609 | 0.9780  | 0.9591   |
| 0.0011        | 14.0  | 16422 | 0.0360          | 0.9618 | 0.9791  | 0.9604   |
| 0.0009        | 15.0  | 17595 | 0.0358          | 0.9648 | 0.9807  | 0.9625   |
| 0.0007        | 16.0  | 18768 | 0.0373          | 0.9627 | 0.9794  | 0.9595   |
| 0.0006        | 17.0  | 19941 | 0.0397          | 0.9597 | 0.9774  | 0.9574   |
| 0.0008        | 18.0  | 21114 | 0.0369          | 0.9652 | 0.9808  | 0.9621   |
| 0.0007        | 19.0  | 22287 | 0.0377          | 0.9646 | 0.9801  | 0.9621   |
| 0.0005        | 20.0  | 23460 | 0.0381          | 0.9639 | 0.9797  | 0.9616   |


### Framework versions

- Transformers 4.21.1
- Pytorch 1.12.1+cu113
- Datasets 2.4.0
- Tokenizers 0.12.1
