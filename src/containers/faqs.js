import React from 'react';
import {Accordion, optForm} from '../components';
import faqsData from '../fixtures/faqs.json';

export function FaqsContainer() {
    return (
        <Accordion>
            <Accordion.Title>Frequently Asked Questions</Accordion.Title>
            {faqsData.map((item) => (
                <Accordion.Item key={item.id}>
                    <Accordion.Header>{item.header}</Accordion.Header>
                    <Accordion.Body>{item.body}</Accordion.Body>
                </Accordion.Item>
            ))}

            <optForm>
                <optForm.Input placeholder="Email address" />
                <optForm.Button>Try it now</optForm.Button>
                <optForm.Text>
                    Ready to watch? Enter your email to create or restart your membership.
                </optForm.Text>
            </optForm>
        </Accordion>
    )
}

