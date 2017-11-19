package com.gift.controller;

import java.util.Set;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gift.exception.UserNotFoundException;
import com.gift.model.Items;

@RestController
@CrossOrigin
@RequestMapping("/registry")
public class RegistryController {

	private static final Logger logger = LoggerFactory.getLogger(ItemController.class);

	private static final String microServicesURL = "http://localhost:9090/registry/";

	@Autowired
	private RestTemplateBuilder restTemplateBuilder;

	@PostMapping("/create")
	public Items createRegistry(@RequestBody Set<Long> itemIds) {
		logger.info("Creating the registry with " + itemIds.toArray());
		Items items = new Items();
		try {
			items = restTemplateBuilder.build().postForEntity(microServicesURL + "create", itemIds, Items.class)
					.getBody();
			logger.info("In create Items " + items);

		} catch (Exception e) {
			throw new UserNotFoundException("No Items Found !");

		}

		return items;
	}

}
