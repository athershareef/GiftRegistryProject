package com.gift.controller;

import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gift.model.Item;
import com.gift.model.Registry;
import com.gift.model.User;
import com.gift.service.ItemServiceImpl;
import com.gift.service.RegistryServiceImpl;
import com.gift.service.UserServiceImpl;

@RestController
@CrossOrigin
@RequestMapping("/registry")
public class MicroRegistryController {

	private static final Logger logger = LoggerFactory.getLogger(MicroRegistryController.class);

	@Autowired
	private ItemServiceImpl itemService;

	@Autowired
	private UserServiceImpl userService;

	@Autowired
	private RegistryServiceImpl registryService;

	@PostMapping("/create")
	public Registry createRegistry(@Valid @RequestBody Set<Long> itemIds, HttpServletResponse response) {
		logger.info("Creating the Registry");
		logger.debug("With items " + itemIds);
		Set<Item> items = new HashSet<Item>();

		for (Long itemId : itemIds) {
			items.add(itemService.getItemById(itemId));
		}

		User admin = userService.getUserById(2);

		System.out.println(admin.getEmail());

		Registry registry = new Registry(1, items, admin);

		Registry createdRegistry = registryService.createRegistry(registry);

		/**
		 * Sets the Created HTTP_STATUS when Vehicle is successfully Created
		 */
		response.setStatus(201);
		return createdRegistry;
	}

	@GetMapping
	public Collection<Registry> getAllRegistries() {
		logger.info("Retrieving the Registries");
		return registryService.getAllRegistries();
	}
}
